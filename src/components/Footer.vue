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
      
      <div class="social-icons">
        <a href="#" class="social-icon" aria-label="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="#" class="social-icon" aria-label="YouTube">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a href="#" class="social-icon" aria-label="VK">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.785 16.241s.287-.033.435-.2c.135-.15.131-.433.131-.433s-.02-1.283.58-1.473c.592-.188 1.352.95 2.156 1.37.605.315 1.064.246 1.064.246l2.15-.031s1.123-.071.59-.94c-.044-.07-.31-.65-1.588-1.84-1.344-1.25-1.163-.525.453-1.608.982-.654 1.72-1.347 1.92-1.62.447-.61.312-1.004.312-1.004s-.09-.628-.78-.72h-1.66s-1.23.08-1.62.37c-.112.08-.196.26-.196.26s-.035.23-.082.53c-.19 1.12-.41 1.88-.82 2.36-.49.58-1.05.61-.78 1.27.35.85 1.55 1.98 2.11 2.58.65.7.91 1.13.7 1.76-.16.48-1.15 1.08-1.61 1.38-.45.29-1.05.45-.81.93.19.38.68.48 1.5.48h1.12s1.35.08.71 1.15c-.32.54-2.28 2.33-2.28 2.33s-.17.12-.38.2c-.29.11-.7.08-.7.08l-1.66-.1s-.38-.03-.66-.15c-.22-.1-.39-.3-.39-.3s-.06-.1-.04-.2c.02-.1.09-.15.09-.15s1.6-1.88 1.77-2.12c.18-.24.12-.45-.06-.45-.18 0-.38-.02-.38-.02s-.3.04-.52.24c-.35.32-.74.8-.74.8s-.05.08-.12.12c-.1.05-.22.03-.22.03l-1.68-.05s-.5-.02-.68-.22c-.16-.18-.12-.43-.12-.43s.08-2.24.17-3.12c.09-.88.15-1.11-.03-1.28-.18-.17-.43-.22-.57-.23-.43-.02-1.12 0-1.4.02-.18.01-.31.08-.4.15-.09.07-.07.14-.05.2.02.08.08.26.12.4.16.55.54 2.1.54 2.1s.03.2-.05.3c-.1.12-.3.16-.4.16l-.96-.02s-.72.01-1.01.15c-.24.12-.4.38-.29.4.11.02.36.07.62.26.42.3.64.98.71 1.41.05.3.04.98-.01 1.52-.08.88-.17 1.24-.17 1.24s-.05.25.15.4c.2.15.47.14.47.14l1.78-.05s.34-.02.46.1c.12.12.09.37.09.37s-.4 2.33-.54 2.8c-.11.36-.15.48 0 .66.15.18.44.44 1.01.75.71.39 1.59.61 1.59.61s.17.08.26.15c.09.07.07.13.07.2-.01.07-.01.2-.01.2s-.02.5.23.69c.25.19.59.14.59.14l1.68-.05s.89-.05 1.22-.18c.32-.13.26-.3.26-.3z"/>
          </svg>
        </a>
        <a href="#" class="social-icon" aria-label="WhatsApp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
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