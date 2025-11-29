"use client";

import { useEffect, useState } from "react";
import { handleChange } from "@/utils/handleChange";

export function CreateForm({ id = null }) {
    const [data, setData] = useState({
        name: "",
        slug: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        imageUrl: "",
    });

    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const newErrors = {};

        if (!data.name.trim()) newErrors.name = "El nombre es obligatorio.";
        if (!data.slug.trim()) newErrors.slug = "El slug es obligatorio.";
        if (!data.description.trim())
            newErrors.description = "La descripción es obligatoria.";
        if (data.price <= 0) newErrors.price = "El precio debe ser mayor a 0.";
        if (data.stock < 0) newErrors.stock = "El stock no puede ser negativo.";
        if (
            data.imageUrl &&
            !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(data.imageUrl)
        ) {
            newErrors.imageUrl = "URL de imagen no válida.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateFields()) return;

        const formattedData = {
            ...data,
            price: parseFloat(data.price),
            stock: parseInt(data.stock),
        };

        const url = id
            ? `http://localhost:3000/api/product/${id}`
            : "http://localhost:3000/api/products";
        const method = id ? "PUT" : "POST";

        try {
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formattedData),
            });

            if (!response.ok) {
                const error = await response.json();
                console.error("Error en la solicitud:", error);
                alert("Hubo un error al procesar el producto.");
                return;
            }

            const result = await response.json();
            console.log(id ? "Producto actualizado:" : "Producto creado:", result);

            if (!id) {
                setData({
                    name: "",
                    slug: "",
                    description: "",
                    price: "",
                    stock: "",
                    category: "",
                    imageUrl: "",
                });
            }

            alert(
                id
                    ? "✅ Producto actualizado correctamente."
                    : "🎉 Producto creado correctamente."
            );
        } catch (error) {
            console.error("Error de conexión:", error);
            alert("Error de conexión con el servidor.");
        }
    };

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/api/product/${id}`)
                .then((res) => res.json())
                .then((product) => {
                    if (product) {
                        setData({
                            name: product.name || "",
                            slug: product.slug || "",
                            description: product.description || "",
                            price: product.price || "",
                            stock: product.stock || "",
                            category: product.category || "",
                            imageUrl: product.imageUrl || "",
                        });
                    }
                })
                .catch((error) => console.error("Error obteniendo producto:", error));
        }
    }, [id]);

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-title neon-text">
                {id ? "Editar Producto" : "Crear Nuevo Producto"}
            </h2>

            <div className="form-field">
                <label className="form-label">Nombre del producto</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => handleChange({ e, setValues: setData, values: data })}
                    className="form-input"
                    placeholder="Ej: Heladera Samsung 320L"
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="form-field">
                <label className="form-label">Descripción</label>
                <textarea
                    name="description"
                    value={data.description}
                    onChange={(e) => handleChange({ e, setValues: setData, values: data })}
                    className="form-input"
                    placeholder="Detalles del producto"
                    rows={3}
                />
                {errors.description && <p className="form-error">{errors.description}</p>}
            </div>

            <div className="form-field">
                <label className="form-label">Slug</label>
                <input
                    type="text"
                    name="slug"
                    value={data.slug}
                    onChange={(e) => handleChange({ e, setValues: setData, values: data })}
                    className={`form-input ${id ? "disabled-input" : ""}`}
                    placeholder="heladera-samsung-320l"
                    disabled={!!id}
                />
                {errors.slug && <p className="form-error">{errors.slug}</p>}
            </div>

            <div className="form-grid">
                <div className="form-field">
                    <label className="form-label">Precio ($)</label>
                    <input
                        type="number"
                        name="price"
                        value={data.price}
                        onChange={(e) =>
                            handleChange({ e, setValues: setData, values: data })
                        }
                        className="form-input"
                        placeholder="Ej: 249999"
                    />
                    {errors.price && <p className="form-error">{errors.price}</p>}
                </div>

                <div className="form-field">
                    <label className="form-label">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={data.stock}
                        onChange={(e) =>
                            handleChange({ e, setValues: setData, values: data })
                        }
                        className="form-input"
                        placeholder="Ej: 15"
                    />
                    {errors.stock && <p className="form-error">{errors.stock}</p>}
                </div>
            </div>

            <div className="form-field">
                <label className="form-label">Categoría</label>
                <input
                    type="text"
                    name="category"
                    value={data.category}
                    onChange={(e) => handleChange({ e, setValues: setData, values: data })}
                    className="form-input"
                    placeholder="Ej: Heladeras"
                />
            </div>

            <div className="form-field">
                <label className="form-label">URL de Imagen</label>
                <input
                    type="text"
                    name="imageUrl"
                    value={data.imageUrl}
                    onChange={(e) => handleChange({ e, setValues: setData, values: data })}
                    className="form-input"
                    placeholder="https://ejemplo.com/imagen.jpg"
                />
                {errors.imageUrl && <p className="form-error">{errors.imageUrl}</p>}
            </div>

            <button type="submit" className="form-button">
                {id ? "Actualizar Producto" : "Crear Producto"}
            </button>
        </form>
    );
}
