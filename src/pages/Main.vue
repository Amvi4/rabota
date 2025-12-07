<script  setup>

</script>
    
<template>
    <div class="mainpage">
        <div class="main-img">
            <div class="main-text">
                <h1>Стоматологическая клиника </h1>
                <RouterLink to="/appointment"><button class="main-btn">ЗАПИСАТЬСЯ НА ПРИЕМ</button></RouterLink>
            </div>
        </div>
        <div class="container">
            <div class="cont-text">
                <h2>КЛИНИКА DENTAL CLUB</h2>
                <div class="cont-btn">
                    <p>Первая клиника в Казахстане, предоставляющая 
                        полный спектр стоматологических услуг на европейском уровне.
                        Мы используем передовое оборудование и digital технологии.
                    </p>
                    <RouterLink to="/appointment"><button>ЗАПИСАТЬСЯ НА ПРИЕМ</button></RouterLink>
                </div>
            </div>
            <div class="cont-imgs">
                    <img src="../images/cartinka1.png" alt="кратинка" class="cartinka1">
                    <img src="../images/cartinka2.png" alt="кратинка" class="cartinka2">
            </div>
        </div>
        <div class="container">
            <div class="cont-text">
                <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
                <ul class="cont-btn">
                    <li>Оборудование и материалы от ведущих мировых брендов.</li>
                    <li>Профессионалы, владеющие самыми современными методиками и <br>способные в минимальные сроки решить задачи любой сложности.</li>
                    <li>Надежность и гарантии.</li>
                    <li>Абсолютная уверенность в результатах лечения. </li>
                    <li>Индивидуальный подход и экономия времени пациента.</li>
                    <li>Безупречный сервис и интерьер, в котором приятно находиться.</li>
                    <RouterLink to="/appointment"><button>ЗАПИСАТЬСЯ НА ПРИЕМ</button></RouterLink>
                </ul>
                
            </div>
            <div class="cont-imgs">
                    <img src="../images/cartinka3.png" alt="кратинка" class="cartinka2">
                    <img src="../images/cartinka4.png" alt="кратинка" class="cartinka1">
            </div>
        </div>
    </div>
</template>

<style>

.main-text{
    position: absolute;
    display:flex;
    flex-direction: column;
    align-items: center;
    bottom: 50%;
}
.main-img{
    height: 900px;
    background: url('../images/1.png');
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: center;
    place-items: center;
    gap: 42px;
    z-index: 0;
}
.main-btn{
    background-color: white;
    color: #777C88;
    border: 1px solid white;
}
.main-btn:hover{
    background-color: rgb(175, 175, 175);
    color: #1e1e1f;
    border: 1px solid rgb(175, 175, 175);
}
.main-btn button{
    margin: 40px;
}
.container{
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 100%;
    padding: 126px 0;

}
.cont-text{
    padding: 0 157px;
    display: flex;
    align-items: start;
    justify-content: space-between;
}
.cont-text h2{
    width: 300px;
}
.cont-text p{
    width: 679px;
}
.cont-btn{
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.cont-imgs{
    width: 100%;
    height: 856px;
    position: relative;
   
}
.cartinka1{
    position: absolute;
    left: 0;
    bottom: 0;
}
.cartinka2{
    position: absolute;
    right: 0;
    top: 0;
}
</style>