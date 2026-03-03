import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const whatsappNumber = '9613326759';
    const message = 'Hello Smart SMB, I would like to inquire about your services.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle size={28} />
            <span className="whatsapp-tooltip">Chat with us</span>
        </a>
    );
};

export default WhatsAppButton;
