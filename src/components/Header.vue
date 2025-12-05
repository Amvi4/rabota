<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const menuItems = [
  { name: 'ПРОФИЛЬ', route: '/profile' },
  { name: 'ДИАГНОСТИКА', route: '/diagnostics' },
  { name: 'ПРОФИЛАКТИКА КАРИЕСА', route: '/prevention' },
  { name: 'ТЕРАПИЯ', route: '/therapy' },
  { name: 'КОНТАКТЫ', route: '/contacts' }
]

const navigateTo = (route) => {
  router.push(route)
  closeMenu()
}
</script>

<template>
    <header>
        <div class="menu" @click="toggleMenu">
            <img src="../icons/burger.svg" alt="бургер">
            МЕНЮ
        </div>
        <RouterLink to="/">
            <img src="../images/logo.png" alt="логотип">
        </RouterLink>
        <div class="lang">
            <img src="../icons/strelka.svg" alt="стрелочка">
            RUS
        </div>
        
        <!-- Всплывающее меню -->
        <transition name="menu">
            <div v-if="isMenuOpen" class="menu-overlay" @click="toggleMenu">
                <div class="menu-panel" @click.stop>
                    <div class="menu-header">
                        <img src="../icons/burger.svg" alt="бургер" @click="toggleMenu">
                        <span>МЕНЮ</span>
                    </div>
                    <nav class="menu-nav">
                        <RouterLink 
                            v-for="(item, index) in menuItems" 
                            :key="index" 
                            :to="item.route"
                            class="menu-item"
                            @click="closeMenu"
                        >
                            {{ item.name }}
                        </RouterLink>
                    </nav>
                </div>
            </div>
        </transition>
    </header>
</template>

<style>
/* ... existing styles ... */
header{
    height: 100px;
    position:fixed;
    width: 85%;
    padding: 0 157px 0 157px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #00000033;
    backdrop-filter: blur(7px);
    z-index: 1000;
}
.menu{
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
}
.lang{
    gap: 4px;
    display: flex;
    align-items: center;
}

/* Всплывающее меню */
.menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #00000033;
    backdrop-filter: blur(5px);
    z-index: 2000;
}

.menu-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.336);
    backdrop-filter: blur(10px);
    padding: 120px 40px 40px 40px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(7px);
}

.menu-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 60px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
}

.menu-header img {
    cursor: pointer;
}

.menu-nav {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.menu-item {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s, padding-left 0.3s;
    display: block;
}

.menu-item:hover,
.menu-item.router-link-active {
    color: rgb(139, 139, 139);
    padding-left: 10px;
}

/* Анимация появления меню */
.menu-enter-active,
.menu-leave-active {
    transition: opacity 0.3s;
}

.menu-enter-active .menu-panel,
.menu-leave-active .menu-panel {
    transition: transform 0.3s ease;
}

.menu-enter-from {
    opacity: 0;
}

.menu-enter-from .menu-panel {
    transform: translateX(-100%);
}

.menu-leave-to {
    opacity: 0;
}

.menu-leave-to .menu-panel {
    transform: translateX(-100%);
}
</style>