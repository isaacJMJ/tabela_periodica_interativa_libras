// ==========================================
// 1. Configuração do Tailwind CSS
// ==========================================

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "surface-dim": "#ded8e0",
                "on-secondary-container": "#fefcff",
                "on-surface-variant": "#494551",
                "surface": "#fdf7ff",
                "on-primary": "#ffffff",
                "secondary-container": "#1471e6",
                "on-error-container": "#93000a",
                "on-surface": "#1d1b20",
                "on-tertiary-container": "#503d00",
                "surface-container": "#f2ecf4",
                "on-tertiary-fixed": "#241a00",
                "error-container": "#ffdad6",
                "secondary-fixed": "#d8e2ff",
                "surface-variant": "#e6e0e9",
                "on-primary-fixed": "#22005d",
                "inverse-on-surface": "#f5eff7",
                "inverse-primary": "#cfbcff",
                "error": "#ba1a1a",
                "primary": "#4f378a",
                "on-background": "#1d1b20",
                "tertiary-fixed": "#ffdf93",
                "on-error": "#ffffff",
                "on-secondary": "#ffffff",
                "primary-container": "#6750a4",
                "secondary": "#0058bb",
                "secondary-fixed-dim": "#adc7ff",
                "on-primary-container": "#e0d2ff",
                "surface-bright": "#fdf7ff",
                "on-tertiary-fixed-variant": "#594400",
                "surface-container-high": "#ece6ee",
                "tertiary": "#765b00",
                "outline-variant": "#cbc4d2",
                "on-primary-fixed-variant": "#4f378a",
                "surface-tint": "#6750a4",
                "background": "#fdf7ff",
                "outline": "#7a7582",
                "surface-container-low": "#f8f2fa",
                "on-tertiary": "#ffffff",
                "primary-fixed": "#e9ddff",
                "surface-container-lowest": "#ffffff",
                "on-secondary-fixed": "#001a41",
                "on-secondary-fixed-variant": "#004493",
                "tertiary-container": "#c9a74d",
                "tertiary-fixed-dim": "#e7c365",
                "primary-fixed-dim": "#cfbcff",
                "surface-container-highest": "#e6e0e9",
                "inverse-surface": "#322f35"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "cell_size_sm": "64px",
                "unit": "4px",
                "margin": "24px",
                "gutter": "12px",
                "cell_size_md": "80px"
            },
            "fontFamily": {
                "body-md": ["Lexend"],
                "label-sm": ["Lexend"],
                "display-lg": ["Work Sans"],
                "title-lg": ["Lexend"],
                "headline-md": ["Work Sans"]
            },
            "fontSize": {
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "label-sm": ["11px", { "lineHeight": "16px", "letterSpacing": "0.5px", "fontWeight": "500" }],
                "display-lg": ["57px", { "lineHeight": "64px", "letterSpacing": "-0.25px", "fontWeight": "600" }],
                "title-lg": ["22px", { "lineHeight": "28px", "fontWeight": "500" }],
                "headline-md": ["28px", { "lineHeight": "36px", "fontWeight": "500" }]
            }
        },
    },
};

// ==========================================
// 2. Lógica de Interação da Tabela (Modais)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('element-modal');
    const modalContent = modal.querySelector('.modal-content');
    const closeModalBtn = document.getElementById('close-modal');

    // Elementos do Modal para preencher

    const elSymbol = document.getElementById('modal-symbol');
    const elName = document.getElementById('modal-name');
    const elNumber = document.getElementById('modal-number');
    const elMass = document.getElementById('modal-mass');
    const elState = document.getElementById('modal-state');
    const elMelting = document.getElementById('modal-melting');
    const elBoiling = document.getElementById('modal-boiling');
    const elDesc = document.getElementById('modal-desc');
    const elElectronegativity = document.getElementById('modal-electronegativity');

    const openModal = (data) => {
        if (!data) return;

        // Populando os dados usando o banco (data.js)

        elSymbol.textContent = data.symbol;
        elName.textContent = data.name;
        elNumber.textContent = 'Número Atômico: ' + data.number;
        elMass.textContent = data.mass;
        elState.textContent = data.state;
        elMelting.textContent = data.meltingPoint;
        elBoiling.textContent = data.boilingPoint;
        elDesc.textContent = data.description;
        elElectronegativity.textContent = data.electronegativity || 'Desconhecido';

        // Mostrar o modal

        modal.classList.remove('hidden');
        modal.classList.add('flex');

        // Pequeno atraso para a transição suave

        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 10);
    };

    const closeModal = () => {
        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');

        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300);
    };

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Adiciona interatividade em todas as células da tabela
    document.querySelectorAll('.element-cell').forEach(cell => {
        cell.style.cursor = 'pointer';
        cell.style.transition = 'transform 0.2s';

        // Efeito Hover
        cell.addEventListener('mouseenter', () => { cell.style.transform = 'scale(1.1)'; cell.style.zIndex = '10'; });
        cell.addEventListener('mouseleave', () => { cell.style.transform = 'scale(1)'; cell.style.zIndex = '1'; });

        // Evento de Clique
        cell.addEventListener('click', () => {
            const numberSpan = cell.querySelector('span');
            if (numberSpan) {
                const num = parseInt(numberSpan.textContent);
                // Busca o elemento no objeto elementsData importado via data.js
                const data = elementsData.find(e => e.number === num);
                if (data) {
                    openModal(data);
                }
            }
        });
    });
});