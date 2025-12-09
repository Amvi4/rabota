<template>
    <div class="contacts-page">
        <div class="hero-section">
            <div class="hero-content">
                <h1>КОНТАКТЫ</h1>
                <RouterLink to="/appointment"><button class="main-btn">ЗАПИСАТЬСЯ НА ПРИЕМ</button></RouterLink>
            </div>
        </div>

        <div class="container">
            <div class="cont-text">
                <h2>НАШИ КОНТАКТЫ</h2>
                <div class="cont-btn">
                    <div class="contact-info">
                        <div class="contact-item">
                            <h3>Адрес</h3>
                            <p>г. Алматы, ул. Примерная, д. 123</p>
                        </div>
                        <div class="contact-item">
                            <h3>Телефон</h3>
                            <p>+7 (777) 123-45-67</p>
                        </div>
                        <div class="contact-item">
                            <h3>Email</h3>
                            <p>info@dentalclub.kz</p>
                        </div>
                        <div class="contact-item">
                            <h3>Режим работы</h3>
                            <p>Пн-Пт: 9:00 - 20:00<br>Сб-Вс: 10:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="cont-text">
                <h2>КАК НАС НАЙТИ</h2>
                <div class="cont-btn">
                    <p>Мы находимся в центре города с удобной парковкой и доступностью общественного транспорта.</p>
                    <div class="map-placeholder">
                        <img src="../images/map.png" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.hero-section {
    height: 900px;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/5.png');
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

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 679px;
}

.contact-item h3 {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 300;
}

.contact-item p {
    font-size: 18px;
    line-height: 1.6;
}

.map-placeholder {
    width: 679px;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: 20px;
    overflow: hidden;
}

.map-placeholder p {
    color: rgba(255, 255, 255, 0.5);
}
</style>