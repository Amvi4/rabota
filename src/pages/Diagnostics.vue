<template>
    <div class="diagnostics-page">
        <div class="hero-section">
            <div class="hero-content">
                <h1>ДИАГНОСТИКА</h1>
                <RouterLink to="/appointment"><button class="main-btn">ЗАПИСАТЬСЯ НА ПРИЕМ</button></RouterLink>
            </div>
        </div>

        <div class="container">
            <div class="cont-text">
                <h2>DIAGNOCAM</h2>
                <div class="cont-btn">
                    <p>Инновационная система диагностики кариеса без рентгеновского излучения. Позволяет обнаружить кариес на самых ранних стадиях.</p>
                    <ul>
                        <li>Обнаружение кариеса в полном объеме: от начальных форм до обширных кариозных поражений</li>
                        <li>Изображения в режиме реального времени (визуализация диагностического процесса на экране)</li>
                        <li>Отсутствие рентгеновского излучения позволяет обнаружить изменения у пациентов с радиофобией, онкобольных, детей, беременных женщин и малоподвижных пациентов</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="cont-text">
                <h2>МИКРОСКОПИЯ</h2>
                <div class="cont-btn">
                    <p>Использование микроскопов и бинокуляров для детального осмотра и точной диагностики.</p>
                    <ul>
                        <li>Увеличение от 2.5x до 25x</li>
                        <li>Высокая точность диагностики</li>
                        <li>Возможность обнаружения проблем на ранних стадиях</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.hero-section {
    height: 900px;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/2.png');
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

.cont-text p {
    width: 679px;
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