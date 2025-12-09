<script setup>
import { ref } from 'vue';

const reviews = ref([
    { text: 'Отличная клиника! Профессиональные врачи, современное оборудование. Очень доволен результатом.', author: '— Иван Петров' },
    { text: 'Безболезненное лечение, внимательный персонал. Рекомендую всем!', author: '— Мария Иванова' },
    { text: 'Лучшая стоматология в городе. Чисто, комфортно, качественно.', author: '— Алексей Смирнов' },
    { text: 'Отличная клиника! Восстановили все зубы с сильным кариесом', author: '— Никита Никитенков' },
    { text: 'После первого же посещения виден результат. Все в высшем качестве.', author: '— Лев Толстой' },
    { text: 'Колол дрова и топор отскочил тыльной стороной в челюсть. В клинике вылечили зубы и сделали это настолько хорошо, что будьто ничего и не было', author: '— Прохор Филиппович' },
    { text: 'Нет ничего лучше, чем зубы без кариеса.  Спасибо вам', author: '— Игорь Антонович' },
]);

const showModal = ref(false);
const form = ref({
    name: '',
    text: '',
});

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

const submitReview = () => {
    if (!form.value.name.trim() || !form.value.text.trim()) {
        return;
    }

    reviews.value.unshift({
        text: form.value.text.trim(),
        author: `— ${form.value.name.trim()}`,
    });

    form.value = { name: '', text: '' };
    closeModal();
};
</script>

<template>
    <div class="reviews-page">
        <div class="hero-section">
            <div class="hero-content">
                <h1>ОТЗЫВЫ</h1>
                <RouterLink to="/appointment"><button class="main-btn">ЗАПИСАТЬСЯ НА ПРИЕМ</button></RouterLink>
            </div>
        </div>

        <div class="container">
            <div class="reviews-list">
                <div v-for="(review, index) in reviews" :key="index" class="review-item">
                    <p class="review-text">"{{ review.text }}"</p>
                    <p class="review-author">{{ review.author }}</p>
                </div>
            </div>
            <div class="cont-text">
                <button @click="openModal">ОСТАВИТЬ ОТЗЫВ</button>
            </div>
        </div>

        <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
            <div class="modal">
                <div class="modal-header">
                    <h3>Оставьте отзыв</h3>
                    <button class="close-btn" type="button" @click="closeModal">×</button>
                </div>
                <form class="review-form" @submit.prevent="submitReview">
                    <label class="form-field">
                        <span>Ваше имя</span>
                        <input v-model="form.name" type="text" placeholder="Например, Иван" required />
                    </label>
                    <label class="form-field">
                        <span>Отзыв</span>
                        <textarea v-model="form.text" rows="4" placeholder="Поделитесь впечатлениями" required></textarea>
                    </label>
                    <div class="form-actions">
                        <button class="submit-btn" type="submit">Отправить</button>
                        <button class="secondary-btn" type="button" @click="closeModal">Отмена</button>
                    </div>
                </form>
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

.modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: #00000033;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1000;
}

.modal {
    background: #34373a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    width: min(520px, 100%);
    padding: 28px;
    box-shadow: 0 14px 48px rgba(0, 0, 0, 0.4);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.modal-header h3 {
    margin: 0;
    font-size: 28px;
    font-weight: 300;
}

.close-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
}

.close-btn:hover {
    background: rgba(255, 255, 255, 0.16);
}

.review-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
}

.form-field input,
.form-field textarea {
    width: 480px;
    padding: 12px 14px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: #00000033;
    color: white;
    font-family: 'mulish';
    resize: none;
}

.form-field input:focus,
.form-field textarea:focus {
    outline: 1px solid #00000033;
}

.form-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}
.submit-btn{
    width: 150px;
    height: 50px;
    border-radius: 12px;
}



.secondary-btn {
    width: 100px;
    height: 50px;
    border-radius: 12px;
}


</style>