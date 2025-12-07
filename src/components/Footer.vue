<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const openQuestion = ref(null)

const toggleQuestion = (index) => {
  openQuestion.value = openQuestion.value === index ? null : index
}

const questions = [
  {
    question: 'Сколько стоит услуга?',
    answer: 'Стоимость услуги зависит от выбранной процедуры. Пожалуйста, свяжитесь с нами для уточнения цен.'
  },
  {
    question: 'Как часто можно делать снимок и насколько это вредно?',
    answer: 'Частота рентгеновских снимков зависит от клинической необходимости. Современное оборудование минимизирует дозу облучения.'
  },
  {
    question: 'Можно ли беременным делать рентген снимок?',
    answer: 'Беременным женщинам рентген назначается только по строгим показаниям с использованием защитных средств. Рекомендуется проконсультироваться с врачом.'
  },
  {
    question: 'Что может выявить DiagnoCam?',
    answer: [
      'Обнаружение кариеса в полном объеме: от начальных форм до обширных кариозных поражений.',
      'Изображения в режиме реального времени (визуализация диагностического процесса на экране).',
      'Отсутствие рентгеновского излучения позволяет обнаружить изменения у пациентов с радиофобией, онкобольных, детей, беременных женщин и малоподвижных пациентов.'
    ]
  },
  {
    question: 'Какое увеличение у микроскопа и бинокуляров?',
    answer: 'Микроскопы и бинокуляры в нашей клинике обеспечивают увеличение от 2.5x до 25x, что позволяет проводить точную диагностику и лечение.'
  }
]
</script>

<template>
  <footer class="footer">
    <!-- Секция ВОПРОС / ОТВЕТ -->
    <section class="qa-section">
      <h2 class="qa-title">ВОПРОС / ОТВЕТ</h2>
      <div class="questions-list">
        <div 
          v-for="(item, index) in questions" 
          :key="index" 
          class="question-item"
        >
          <div 
            class="question-header" 
            @click="toggleQuestion(index)"
          >
            <span class="question-text">{{ item.question }}</span>
            <span class="question-arrow" :class="{ 'open': openQuestion === index }">
              ↓
            </span>
          </div>
          <div 
            v-if="openQuestion === index" 
            class="question-answer"
          >
            <ul v-if="Array.isArray(item.answer)" class="answer-list">
              <li v-for="(point, i) in item.answer" :key="i">{{ point }}</li>
            </ul>
            <p v-else>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Разделительная линия -->
    <div class="divider"></div>

    <!-- Логотип -->
    <div class="logo-section">
      <RouterLink to="/" class="footer-logo">
        <img src="../images/logo.png" alt="" srcset="">
      </RouterLink>
    </div>

    <!-- Разделительная линия -->
    <div class="divider"></div>

    <!-- Навигация и соцсети -->
    <div class="footer-bottom">
      <nav class="footer-nav">
        <RouterLink to="/" class="nav-link">ГЛАВНАЯ</RouterLink>
        <RouterLink to="/services" class="nav-link">УСЛУГИ</RouterLink>
        <RouterLink to="/team" class="nav-link">КОМАНДА</RouterLink>
        <RouterLink to="/reviews" class="nav-link">ОТЗЫВЫ</RouterLink>
        <RouterLink to="/contacts" class="nav-link">КОНТАКТЫ</RouterLink>
      </nav>
      
      
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #2F353B;
  color: white;
  padding: 80px 157px 40px 157px;
  margin-top: 100px;
}

.qa-section {
  margin-bottom: 60px;
}

.qa-title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
  color: white;
}

.questions-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.question-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
  transition: color 0.3s;
}

.question-header:hover {
  color: rgba(255, 255, 255, 0.8);
}

.question-text {
  font-size: 18px;
  flex: 1;
}

.question-arrow {
  font-size: 20px;
  transition: transform 0.3s;
  margin-left: 20px;
}

.question-arrow.open {
  transform: rotate(180deg);
}

.question-answer {
  padding: 0 0 20px 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  line-height: 1.6;
}

.answer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.answer-list li {
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.answer-list li:before {
  content: "•";
  position: absolute;
  left: 0;
}

.divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 40px 0;
}

.logo-section {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}

.footer-logo {
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.logo-dc {
  font-size: 48px;
  font-weight: bold;
  letter-spacing: 2px;
}

.logo-text {
  font-size: 14px;
  letter-spacing: 3px;
  font-weight: 300;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: rgba(255, 255, 255, 0.7);
}

.social-icons {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.social-icon {
  color: white;
  width: 24px;
  height: 24px;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icon:hover {
  color: rgba(255, 255, 255, 0.7);
}

.social-icon svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 20px 30px 20px;
  }
  
  .qa-title {
    font-size: 32px;
  }
  
  .footer-nav {
    flex-direction: column;
    gap: 15px;
  }
}
</style>