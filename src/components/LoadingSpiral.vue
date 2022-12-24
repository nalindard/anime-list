<template>
    <span id="anime">
        <div class="loader"></div>
        <div class="loader-2"></div>
    </span>
</template>

<style scoped>
.loader,
.loader-2 {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 20px inset #707070;
    /*border-right: 16px solid green;
    border-bottom: 16px solid red;*/
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;

    position: absolute;
    opacity: .2;
    /*background-color: #707070;*/
}

.loader-2 {
    animation: spin-2 2s linear infinite alternate;
}

#anime {
    display: flex;
    position: relative;
}


@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes spin-2 {
    0% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(-180deg);
    }
}
</style>