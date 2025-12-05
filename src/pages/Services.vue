<template>
    <div class="services-page">
        <div class="hero-section">
            <div class="hero-content">
                <h1>УСЛУГИ</h1>
                <button class="main-btn">ЗАПИСАТЬСЯ НА ПРИЕМ</button>
            </div>
        </div>

        <div class="container">
            <div class="cont-text">
                <h2>НАШИ УСЛУГИ</h2>
                <div class="cont-btn">
                    <ul>
                        <li>Диагностика (DiagnoCam, микроскопия)</li>
                        <li>Профилактика кариеса</li>
                        <li>Терапевтическое лечение</li>
                        <li>Эндодонтическое лечение</li>
                        <li>Профессиональная гигиена</li>
                        <li>Эстетическая стоматология</li>
                    </ul>
                    <button>ЗАПИСАТЬСЯ НА ПРИЕМ</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>


.hero-section {
    height: 900px;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/1.png');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.hero-content {
    text-align: center;
    padding: 0 20px;
    max-width: 800px;
}

.hero-content h1 {
    margin-bottom: 30px;
}

.hero-content p {
    font-size: 24px;
    line-height: 1.6;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 100%;
    padding: 126px 0;
}

.cont-text {
    padding: 0 157px;
    display: flex;
    align-items: start;
    justify-content: space-between;
}

.cont-text h2 {
    width: 300px;
}

.cont-btn {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.cont-btn ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 679px;
}

.cont-btn li {
    padding-left: 20px;
    position: relative;
}

.cont-btn li::before {
    content: "•";
    position: absolute;
    left: 0;
}
</style>