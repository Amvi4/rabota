<template>
    <div class="payment-page">
        <div class="payment-container">
            <div class="payment-form">
                <h1>ОПЛАТА</h1>
                
                <div class="payment-summary">
                    <h2>Детали заказа</h2>
                    <div class="summary-item">
                        <span>Услуга:</span>
                        <span>{{ selectedService }}</span>
                    </div>
                    <div class="summary-item">
                        <span>Стоимость:</span>
                        <span class="price">{{ price }} ₽</span>
                    </div>
                </div>

                <form @submit.prevent="handlePayment">
                    <div class="form-group">
                        <label for="cardNumber">Номер карты</label>
                        <input 
                            type="text" 
                            id="cardNumber" 
                            v-model="cardNumber" 
                            required
                            placeholder="0000 0000 0000 0000"
                            maxlength="19"
                            @input="formatCardNumber"
                        >
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="expiryDate">Срок действия</label>
                            <input 
                                type="text" 
                                id="expiryDate" 
                                v-model="expiryDate" 
                                required
                                placeholder="MM/YY"
                                maxlength="5"
                                @input="formatExpiry"
                            >
                        </div>
                        <div class="form-group">
                            <label for="cvv">CVV</label>
                            <input 
                                type="text" 
                                id="cvv" 
                                v-model="cvv" 
                                required
                                placeholder="123"
                                maxlength="3"
                            >
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="cardholder">Имя держателя карты</label>
                        <input 
                            type="text" 
                            id="cardholder" 
                            v-model="cardholder" 
                            required
                            placeholder="IVAN IVANOV"
                        >
                    </div>
                    
                    <button type="submit" class="submit-btn">ОПЛАТИТЬ {{ price }} ₽</button>
                    <p class="security-note">
                         Ваши данные защищены. Оплата обрабатывается через безопасный шлюз.
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const selectedService = ref(route.query.service || 'Консультация')
const price = ref(route.query.price || '5000')
const cardNumber = ref('')
const expiryDate = ref('')
const cvv = ref('')
const cardholder = ref('')
const paymentMethod = ref('card')

const formatCardNumber = (e) => {
    let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '')
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value
    if (formattedValue.length <= 19) {
        cardNumber.value = formattedValue
    }
}

const formatExpiry = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4)
    }
    if (value.length <= 5) {
        expiryDate.value = value
    }
}

const handlePayment = () => {
    // Здесь будет логика обработки оплаты
    console.log('Payment:', {
        service: selectedService.value,
        price: price.value,
        cardNumber: cardNumber.value,
        expiryDate: expiryDate.value,
        cvv: cvv.value,
        cardholder: cardholder.value,
        paymentMethod: paymentMethod.value
    })
    // После успешной оплаты:
    alert('Оплата успешно обработана!')
    // router.push('/success')
}
</script>

<style scoped>
.payment-page {
    min-height: 100vh;
    padding-top: 100px;
    padding-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2F353B;
}

.payment-container {
    width: 100%;
    max-width: 600px;
    padding: 0 20px;
}

.payment-form {
    background-color: #00000033;
    padding: 60px 40px;
    backdrop-filter: blur(10px);
}

.payment-form h1 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 48px;
}

.payment-summary {
    background-color: #00000033;
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 40px;
}

.payment-summary h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 18px;
}

.summary-item .price {
    font-weight: bold;
    font-size: 24px;
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

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.payment-methods {
    margin-bottom: 30px;
}

.payment-methods h3 {
    font-size: 20px;
    margin-bottom: 16px;
}

.methods-grid {
    display: flex;
    gap: 20px;
}

.method-option {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 16px;
    padding: 12px 20px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    transition: all 0.3s;
}

.method-option:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.method-option input[type="radio"] {
    width: auto;
    cursor: pointer;
}

.submit-btn {
    width: 100%;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 18px;
}

.security-note {
    text-align: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
}
</style>
