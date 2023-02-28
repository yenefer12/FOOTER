<template>
    <div class="container">
        <header>
            <h1>navabar</h1>
        </header>
        <main>
            <slot>
            
            </slot>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
</template>
<style lang="scss" scoped>

    .container{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    main{
        flex-grow: 1;
    }
    
</style>