<template>
    <div class="about-employee-wrapper">
        <div class="header">
            <h3>list of employees</h3>
        </div>
        <div class="list">
            <div class="one-employee">
                <NuxtLink to="/employees/12">
                    <img src="../../assets/face-shot.png">
                    <div class="employee-name">
                        <p> Constance Wu</p>
                        <p><strong>department:</strong>sales and market</p>
                    </div>
                </NuxtLink>
            </div>
            <div class="one-employee">
                <NuxtLink to="/new">
                    <img src="../../assets/face-shot.png">
                    <div class="employee-name">
                        <p> Constance Wu</p>
                        <p><strong>department:</strong>sales and market</p>
                    </div>
                </NuxtLink>
            </div>
            <div class="one-employee">
                <NuxtLink to="/new">
                    <img src="../../assets/face-shot.png">
                    <div class="employee-name">
                        <p> Constance Wu</p>
                        <p><strong>department:</strong>sales and market</p>
                    </div>
                </NuxtLink>
            </div>
            <div class="one-employee">
                <NuxtLink to="/new">
                    <img src="../../assets/face-shot.png">
                    <div class="employee-name">
                        <p> Constance Wu</p>
                        <p><strong>department:</strong>sales and market</p>
                    </div>
                </NuxtLink>
            </div>
            <div class="one-employee">
                <NuxtLink to="/new">
                    <img src="../../assets/face-shot.png">
                    <div class="employee-name">
                        <p> Constance Wu</p>
                        <p><strong>department:</strong>sales and market</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="about-employee">
            <NuxtPage/>
        </div>
    </div>
</template>

<script>

</script>

<style>
.about-employee-wrapper {
    padding: 20px;
}
.list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}
.list .one-employee {
    border: 1px solid #333;
    border-radius: 10px;
    font-size: .8rem;
}
.list .one-employee a {
    display: flex;
    text-decoration: none;
    color: #ffffff;
    gap: 10px;
    padding: 10px;
}
.list img {
    height: 60px;
    width: auto;
    border-radius: 50%;
}
</style>