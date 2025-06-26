export const metadata = {
    title: 'Sobre Nosotros - Electrodomésticos Serkana',
    description: 'Conocé más sobre Electrodomésticos Serkana, nuestra misión y nuestro compromiso con la calidad en productos para el hogar.',
};

export default function AboutPage() {
    return (
        <div className="about-page-wrapper">
            <div className="about-container">
                <h1 className="about-title">SOBRE NOSOTROS</h1>
                <p className="about-subtitle">
                    Bienvenido a <span className="highlight">Electrodomésticos Serkana</span>, tu tienda de confianza para equipar tu hogar con tecnología de vanguardia.
                </p>
                <div className="about-content">
                    <p>
                        En Serkana nos apasiona llevar comodidad, eficiencia y estilo a tu vida diaria. Nuestra selección de productos abarca desde pequeños electrodomésticos hasta tecnología de cocina inteligente, con un enfoque en la calidad, el diseño moderno y el excelente servicio.
                    </p>
                    <p>
                        Somos una empresa con visión futurista, pero con valores clásicos: atención al cliente personalizada, compromiso con la durabilidad y el respeto por tu hogar.
                    </p>
                    <p>
                        Nuestra misión es transformar tu casa en un espacio inteligente, funcional y acogedor, donde cada electrodoméstico contribuya a mejorar tu día a día.
                    </p>
                </div>
            </div>
        </div>
    );
}