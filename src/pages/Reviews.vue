<template>
    <div class="reviews-page">
        <div class="hero-section">
            <div class="hero-content">
                <h1>ОТЗЫВЫ</h1>
                <RouterLink to="/payment"><button class="main-btn">ЗАПИСАТЬСЯ НА ПРИЕМ</button></RouterLink>
            </div>
        </div>

        <div class="container">
            <div class="reviews-list">
                <div class="review-item">
                    <p class="review-text">"Отличная клиника! Профессиональные врачи, современное оборудование. Очень доволен результатом."</p>
                    <p class="review-author">— Иван Петров</p>
                </div>
                <div class="review-item">
                    <p class="review-text">"Безболезненное лечение, внимательный персонал. Рекомендую всем!"</p>
                    <p class="review-author">— Мария Иванова</p>
                </div>
                <div class="review-item">
                    <p class="review-text">"Лучшая стоматология в городе. Чисто, комфортно, качественно."</p>
                    <p class="review-author">— Алексей Смирнов</p>
                </div>
            </div>
            <div class="cont-text">
                <RouterLink to="/payment"><button>ОСТАВИТЬ ОТЗЫВ</button></RouterLink>
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
    align-items: center;
}

.reviews-list {
    width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.review-item {
    padding: 40px;
    width: 70%;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
}

.review-text {
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 20px;
}

.review-author {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
}

.cont-text {
    display: flex;
    justify-content: center;
}
</style>