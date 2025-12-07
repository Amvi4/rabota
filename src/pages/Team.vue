<script setup>
    const items = [
        {image:'/assets/images/tetka.png', name: 'Ольга Григорьевна', job: 'Стоматолог', stage: 5},
        {image:'/assets/images/muzhik.png', name: 'Глеб Викторович', job: 'Стоматолог', stage: 10},
    ]
</script>


<template>
    <div class="team-page">
        <div class="hero-section">
            <div class="hero-content">
                <h1>КОМАНДА</h1>
                <RouterLink to="/appointment"><button class="main-btn">ЗАПИСАТЬСЯ НА ПРИЕМ</button></RouterLink>
            </div>
        </div>

        <div class="container">
            <div class="cont-text">
                <h2>НАШИ СПЕЦИАЛИСТЫ</h2>
                <div class="cont-btn">
                    <p>Наша команда состоит из высококвалифицированных специалистов, которые постоянно повышают свой профессиональный уровень.</p>
                    <ul>
                        <li>Врачи-стоматологи высшей категории</li>
                        <li>Сертифицированные специалисты</li>
                        <li>Опыт работы от 10 лет</li>
                        <li>Регулярное повышение квалификации</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="specialists">
            <div class="spec" v-for="item in items" :key="item.image">
                <img :src="item.image" alt="стоматолог">
                <div class="spectext">
                    {{ item.name }}
                    <ul>
                        <li>Профиль: {{ item.job }}</li>
                        <li>Стаж работы: {{ item.stage }} лет</li>
                    </ul>
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
.specialists{
    display: flex;
    flex-direction: column;
    gap: 100px;
}
.spec{
    display: flex;
    align-items: center;
    padding: 0 157px;
    gap: 200px;
}
.spectext{
    font-size: 32px;
}
.spectext ul{
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 20px;
}

</style>