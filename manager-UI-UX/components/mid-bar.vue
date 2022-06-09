<template>
    <div class="mid">
        <div class="top">
            <div class="search background-blur">
                <label for="search"><img src="../assets/search-svgrepo-com.svg"></label>
                <input type="text" placeholder="tap to search">
            </div>
            <div class="bell background-blur">
                <img src="../assets/bell-svgrepo-com.svg">
            </div>
        </div>
        <main>
            <div class="preview background-blur">
                <div class="chart">
                    
                </div>
            </div>
            <div class="yesterday ">
                <div class="up background-blur">

                </div>
                <div class="down background-blur">
                    <img class="blur-background" src="../assets/increase-svgrepo-com.svg" >
                    <div class="info">
                        <p>30 day </p>
                        <p>customer satisfactory rate</p>
                    </div>
                    <p>70%</p>
                </div>
            </div>
            <div class="live-today background-blur">
                <h4>samples today</h4>
                <div class="sample-examples">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, expedita.</p>
                </div>
                 <div class="sample-examples">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, expedita.</p>
                </div>
                 <div class="sample-examples">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, expedita.</p>
                </div>
            </div>
            <div class="top-employees background-blur">
                <h5>top employees</h5>
                <div class="blur-background">
                    <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMHNob3R8ZW58MHx8MHx8&w=1000&q=80" >
                    <div class="details">
                        <h4>justin jeso</h4>
                        <p>sales and marketing</p>
                    </div>
                    <p>97%</p>
                </div>
                 <div class="blur-background">
                    <img src="data:image/jpeg;base64,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">
                    <div class="details">
                        <h4>Lily you</h4>
                        <p>technology and innovation</p>
                    </div>
                    <p>94%</p>
                </div>
                 <div class="blur-background">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6diMiYXkRejEp9n0LBF4uf44iXMl1Nqg_sQ&usqp=CAU" >
                    <div class="details">
                        <h4>Lebron james</h4>
                        <p>sports and activities</p>
                    </div>
                    <p>91%</p>
                </div>
            </div>
        </main>
    </div>
</template>


<script>

export default {
    mounted(){
        let colors = ['#F1BA31','#EF5629','#DC1456'];
        let samples = [...document.querySelectorAll(".sample-examples")]
        for (let i = 0; i < samples.length; i++) {
            let colorPicked = this.randomInteger(0,3);
            samples[i].style.color = colors[colorPicked];
        };
    },
    methods: {
        randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}
</script>
<style>
.mid {
    padding: 10px;
    color: var(--main-color);
}
.top {
    min-width: 650px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 30px;
}
.search {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    column-gap: 20px;
    padding: 0 15px;
}
.search input {
    background: transparent;
    border: none;
    outline: none;
    appearance: none;
    color: var(--main-color);
}
.search img , .bell img {
    height: 20px;
}

.bell{
    padding: 10px 13px;
    border-radius: 10px;
}
main {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px 0;
    justify-content: center;
    gap: 20px;
}
main .preview {
    height: 250px;
    width: 40%;
    border-radius: 10px;
}
main .yesterday {
    height: 250px;
    width: 50%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}
main .yesterday .up {
    height:55%;
    width: 100%;
    border-radius: 10px;
}
main .yesterday .down {
    height: 40%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
}
main .yesterday .down .info {
    font-size: .8rem;
    margin: 0 auto 0 10px;
    padding: 10px 0;
    position: relative;
    top: 10px;
}
main .yesterday .down .info p:nth-child(2) {
    position: relative;
    bottom: 10px;
    color: var(--main-orange);
}
main .yesterday .down img {
    padding: 5px;
    border-radius: 10px;
}
main .yesterday .down > p {
    color: var(--main-yellow);
}
main .live-today {
    height: 250px;
    width: 40%;
    border-radius: 10px;
    font-size: .8rem;
    padding: 20px;
}
main .live-today .sample-examples {
    padding: .1em 10px !important;
    border-radius: 10px;
    font-size: .75rem;
}
main .top-employees {
    height: 250px;
    width: 50%;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
main .top-employees > div {
    display: flex;
    font-size: .8rem;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 10px;
    transition: background 100ms ease-in;
}
main .top-employees > div:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.001);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
}
main .top-employees > div .details {
    font-size: .5rem;
    height: min-content;
    margin-left: 10px;
    position: relative;
    top: 5px;
}
main .top-employees > div .details p{
    position: relative;
    bottom: 7px;
}
main .top-employees > div .details p:nth-child(2){
    color: var(--main-orange);
}
main .top-employees > div > p {
    margin: 0 0 0 auto;
    color: var(--main-yellow);
}
main .top-employees img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
</style>