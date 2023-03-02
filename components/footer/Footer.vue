<script setup>

</script>

<template>
   
    <footer>
        <div class="container-flex">
            <div class="item">
                <ul>
                    <li>
                        <p>© HOT RESTAURANTE </p>
                    </li>
                    <li>
                        <a href="#">experiencia@hotrestaurante.com </a>
                    </li>
                </ul>
            </div>
            <div class="item">
                <ul>
                    <li>
                        <a href="#">Términos y condiciones</a>
                    </li>
                    <li>
                        <a href="#">Política de privacidad</a>
                    </li>
                </ul>
            </div>
            <div class="item">
                <ul>
                    <li>
                        <p>Síguenos</p>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                        <a href="https://www.instagram.com/"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                        <a href="https://web.telegram.org/k/"><font-awesome-icon icon="fa-brands fa-telegram" /></a>
                    </li>
                </ul>
            </div>

        </div>
    </footer>
</template>
<style lang="scss" scoped>

footer {
    width: 100%;
    list-style: none;
    bottom: 0;
    height: 10%;

    .container-flex {
        display: flex;
        flex-flow: row wrap;
        background-color: $background-footer;
        padding: 1%;
        justify-content: space-around;
        text-align: center;

        .item {
            display: block;
            width: 20%;
            height: 100%;
            color: $text-color-footer;
            overflow-wrap: break-word;
            /* evita que se desborde el texto */
            flex: 1 1 content;
            margin: 1.5%;
            font-family: Roboto;

            ul li {
                list-style: none;

                p {
                    margin: 1%;
                    font-size: $text-size;
                    
                }

                a {
                    color: $text-color-footer;
                    margin: 1%;
                    font-size: $text-size;
                    text-decoration: none;
                   
                }

                svg{
                    color:$text-color-footer;
                    width: 40px;
                    height: 40px;
                    margin: 1px 5px;
                }
            }
        }
    }
}
</style>