<template>
    <div class="auth-page">
        <div class="auth-container">
            <div class="auth-form">
                <h1>РЕГИСТРАЦИЯ</h1>
                <form @submit.prevent="handleRegister">
                    <div class="form-group">
                        <label for="name">Имя</label>
                        <input 
                            type="text" 
                            id="name" 
                            v-model="name" 
                            required
                            placeholder="Введите ваше имя"
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
                        <label for="password">Пароль</label>
                        <input 
                            type="password" 
                            id="password" 
                            v-model="password" 
                            required
                            placeholder="Минимум 8 символов"
                        >
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Подтвердите пароль</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            v-model="confirmPassword" 
                            required
                            placeholder="Повторите пароль"
                        >
                    </div>
                    <div class="form-options">
                        <label class="checkbox-label">
                            <input type="checkbox" v-model="agreeTerms" required>
                            <span>Я согласен с условиями использования</span>
                        </label>
                    </div>
                    <RouterLink to="/profile"><button type="submit" class="submit-btn">ЗАРЕГИСТРИРОВАТЬСЯ</button></RouterLink>
                    <p class="auth-link">
                        Уже есть аккаунт? 
                        <RouterLink to="/login">Войти</RouterLink>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreeTerms = ref(false)

const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
        alert('Пароли не совпадают')
        return
    }
    // Здесь будет логика регистрации
    console.log('Register:', { 
        name: name.value, 
        email: email.value, 
        phone: phone.value,
        password: password.value 
    })
    // После успешной регистрации:
    // router.push('/login')
}
</script>

<style scoped>
.auth-page {
    min-height: 100vh;
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2F353B;
}

.auth-container {
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
}

.auth-form {
    background-color: #00000033;
    padding: 60px 40px;
    border-radius: 8px;
    backdrop-filter: blur(10px);
}

.auth-form h1 {
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

.form-group input {
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

.form-group input:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.15);
}

.form-group input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
}

.checkbox-label input[type="checkbox"] {
    width: auto;
    cursor: pointer;
}

.submit-btn {
    width: 100%;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 18px;
}

.auth-link {
    text-align: center;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
}

.auth-link a {
    color: white;
    text-decoration: underline;
    transition: color 0.3s;
}

.auth-link a:hover {
    color: rgba(255, 255, 255, 0.8);
}
</style>