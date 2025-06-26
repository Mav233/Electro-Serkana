"use client";
import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Nombre requerido";

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
            newErrors.email = "Email inválido";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Teléfono requerido";
        } else if (!/^\d{7,15}$/.test(form.phone.replace(/\D/g, ''))) {
            newErrors.phone = "Teléfono inválido (solo números, mínimo 7 dígitos)";
        }

        if (!form.subject.trim()) newErrors.subject = "Asunto requerido";
        if (form.message.length < 10) newErrors.message = "Mensaje muy corto";

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch("http://localhost:3000/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                });

                if (response.ok) {
                    alert("Formulario enviado con éxito ✉️");
                    setForm({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                    });
                } else {
                    alert("Hubo un error al enviar el mensaje 😓");
                }
            } catch (error) {
                console.error("Error al enviar el formulario:", error);
                alert("No se pudo enviar el formulario. Intenta más tarde.");
            }
        }
    };

    return (
        <div className="contact-page-wrapper">
            <div className="contact-form-container">
                <h1 className="contact-title">Contacto</h1>

                <form onSubmit={handleSubmit} className="contact-form">
                    {[
                        { label: "Nombre", name: "name", type: "text" },
                        { label: "Correo electrónico", name: "email", type: "email" },
                        { label: "Teléfono", name: "phone", type: "tel" },
                        { label: "Asunto", name: "subject", type: "text" },
                    ].map(({ label, name, type }) => (
                        <div key={name} className="form-group">
                            <label className="form-label">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={form[name]}
                                onChange={handleChange}
                                className="form-input"
                                placeholder={label}
                            />
                            {errors[name] && <p className="form-error">{errors[name]}</p>}
                        </div>
                    ))}

                    <div className="form-group">
                        <label className="form-label">Mensaje</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="form-textarea"
                            rows={5}
                            placeholder="Escribe tu mensaje..."
                        />
                        {errors.message && <p className="form-error">{errors.message}</p>}
                    </div>

                    <button type="submit" className="form-submit-button">
                        🚀 Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}