<template>
    <div>
        <h1>이벤트 클릭</h1>
        <button @click="increaseCnt(); printConsole()">Add 1</button>
        <p>The counter is : {{ cnt }}</p>
    </div>
    <div>
        <select v-model="selectedValue" @change="changeSelect">
            <option>서울</option>
            <option>부산</option>
            <option>제주</option>
        </select>
        {{ selectedValue }}
    </div>
    <div>
        {{ txtVal }}
        <input type="txtVal" v-model="txtVal" @keyup="changeTxtVal()" @keyup.enter="enterTxtVal()">
    </div>
</template>

<script>
export default {
    data() {
        return {
            cnt: 0,
            selectedValue: '서울',
            txtVal: ''
        }
    },
    methods: {
        increaseCnt() {
            this.cnt++;
        },
        printConsole() {
            console.log(this.cnt);
        },
        changeSelect() {
            alert(this.selectedValue);
        },
        changeTxtVal() {
            console.log(this.txtVal); 
            // input change면 포커스를 잃어야지 실행 됨
            // 계속 바뀔려면 keyup 사용!
        },
        enterTxtVal() {
            console.log('Enter!!');
        }
    }
}
</script>

<style>
</style>