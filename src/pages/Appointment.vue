<template>
    <div class="appointment-page">
        <div class="appointment-container">
            <div class="appointment-form">
                <h1>ЗАПИСЬ НА ПРИЕМ</h1>
                <form @submit.prevent="handleAppointment">
                    <div class="form-group">
                        <label for="service">Выберите услугу</label>
                        <select 
                            id="service" 
                            v-model="selectedService" 
                            required
                        >
                            <option value="">-- Выберите услугу --</option>
                            <option value="diagnostics">Диагностика</option>
                            <option value="prevention">Профилактика кариеса</option>
                            <option value="therapy">Терапия</option>
                            <option value="consultation">Консультация</option>
                            <option value="hygiene">Профессиональная гигиена</option>
                            <option value="other">Другое</option>
                        </select>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="date">Дата приема</label>
                            <input 
                                type="date" 
                                id="date" 
                                v-model="appointmentDate" 
                                required
                                :min="minDate"
                            >
                        </div>
                        <div class="form-group">
                            <label for="time">Время</label>
                            <select 
                                id="time" 
                                v-model="appointmentTime" 
                                required
                            >
                                <option value="">-- Выберите время --</option>
                                <option v-for="time in availableTimes" :key="time" :value="time">
                                    {{ time }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="doctor">Выберите врача (необязательно)</label>
                        <select id="doctor" v-model="selectedDoctor">
                            <option value="">Любой свободный врач</option>
                            <option value="doctor1">Иванов Иван Иванович</option>
                            <option value="doctor2">Петрова Мария Сергеевна</option>
                            <option value="doctor3">Сидоров Алексей Викторович</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="name">Ваше имя</label>
                        <input 
                            type="text" 
                            id="name" 
                            v-model="name" 
                            required
                            placeholder="Введите ваше имя"
                        >
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="phone">Телефон</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                v-model="phone" 
                                required
                                placeholder="+7 (777) 123-45-67"
                            >
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                v-model="email" 
                                required
                                placeholder="your@email.com"
                            >
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="comment">Комментарий (необязательно)</label>
                        <textarea 
                            id="comment" 
                            v-model="comment" 
                            rows="4"
                            placeholder="Опишите причину обращения или дополнительные пожелания"
                        ></textarea>
                    </div>
                    <div class="form-group" @submit.prevent="handleAppointment" :key="generateCaptcha">
                        <label>Введите результат: {{ captcha.a }} + {{ captcha.b }} = ?</label>
                        <input 
                            type="number" 
                            v-model="captchaInput" 
                            required
                            placeholder="Решите пример"
                        >
                    </div>



                    <div class="form-options">
                        <label class="checkbox-label">
                            <input type="checkbox" v-model="agreeTerms" required>
                            <span>Я согласен с условиями обработки персональных данных</span>
                        </label>
                    </div>

                    <button type="submit" class="submit-btn">ЗАПИСАТЬСЯ НА ПРИЕМ</button>
                    
                    <p class="info-note">
                        После отправки заявки с вами свяжется администратор для подтверждения записи.
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const captcha = ref({
  a: Math.floor(Math.random() * 10),
  b: Math.floor(Math.random() * 10)
});

const captchaInput = ref("");

const generateCaptcha = () => {
  captcha.value = {
    a: Math.floor(Math.random() * 10),
    b: Math.floor(Math.random() * 10)
  };
  captchaInput.value = "";
};




const router = useRouter()

const selectedService = ref('')
const appointmentDate = ref('')
const appointmentTime = ref('')
const selectedDoctor = ref('')
const name = ref('')
const phone = ref('')
const email = ref('')
const comment = ref('')
const agreeTerms = ref(false)

// Минимальная дата - сегодня
const minDate = computed(() => {
    const today = new Date()
    return today.toISOString().split('T')[0]
})

// Доступное время (пример)
const availableTimes = ref([
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00'
])

const handleAppointment = () => {
    // Здесь будет логика отправки заявки
    console.log('Appointment:', {
        service: selectedService.value,
        date: appointmentDate.value,
        time: appointmentTime.value,
        doctor: selectedDoctor.value,
        name: name.value,
        phone: phone.value,
        email: email.value,
        comment: comment.value
    })
    
    // После успешной отправки:
    alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')
    // router.push('/success')
}
</script>

<style scoped>
.appointment-page {
    min-height: 100vh;
    padding-top: 100px;
    padding-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2F353B;
}

.appointment-container {
    width: 100%;
    max-width: 700px;
    padding: 0 20px;
}

.appointment-form {
    background-color: #00000033;
    padding: 60px 40px;
    border-radius: 8px;
    backdrop-filter: blur(10px);
}

.appointment-form h1 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
}

.form-group {
    margin-bottom: 24px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 14px 20px;
    background-color: #00000033;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: white;
    font-size: 16px;
    font-family: 'mulish';
    transition: all 0.3s;
    box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background-color: #00000065;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.form-group select {
    cursor: pointer;
}

.form-group select option {
    background-color: #2F353B;
    color: white;
}

.form-group textarea {
    resize: vertical;
    min-height: 100px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.form-options {
    margin-bottom: 30px;
}

.checkbox-label {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.5;
}

.checkbox-label input[type="checkbox"] {
    width: auto;
    margin-top: 4px;
    cursor: pointer;
}

.submit-btn {
    width: 100%;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 18px;
}

.info-note {
    text-align: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.5;
}

@media (max-width: 768px) {
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .appointment-form {
        padding: 40px 20px;
    }
    
    .appointment-form h1 {
        font-size: 36px;
    }
}
</style>