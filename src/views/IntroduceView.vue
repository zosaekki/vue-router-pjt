<template>
  <div>
    <h1>my name is zosaekki</h1>
    <input type="number" v-model.number="numberModel">
    {{ printNumber }}
    <hr>
    <div>
      <label>female<input type="radio" v-model="gender" value="0"></label>
      <label>male<input type="radio" v-model="gender" value="1"></label>
    </div>
    <div>{{ gender }}</div>
    <div>{{ printGender }}</div>
    <hr>
    <div>
      <h3>p.96</h3>
      <div>{{ htmlString }}</div> <!-- innerText -->
      <div v-html="htmlString"></div> <!-- innerHTML -->
    </div>
    <hr>
    <div>
      <textarea v-model="message"></textarea>
      <div>{{ printText }}</div>
    </div>
    <hr>
    <div>
      <select v-model="city">
        <option value="00">서울</option>
        <option value="01">대전</option>
        <option value="02">대구</option>
        <option value="03">부산</option>
      </select>
      <div>{{ printCity }}</div>
    </div>
    <hr>
    <div>
      <label><input type="checkbox" v-model="checked" value="서울">서울</label>
      <label><input type="checkbox" v-model="checked" value="대전">대전</label>
      <label><input type="checkbox" v-model="checked" value="대구">대구</label>
      <label><input type="checkbox" v-model="checked" value="부산">부산</label>
      <div>선택한 지역 : {{ checked }}</div>
    </div>
    <hr>
    <div>
      <input type="text" v-model="textValue1">
      <input type="text" v-model="textValue2">
      <button type="button" v-bind:disabled="textValue1 === '' || textValue1 !== textValue2">전송</button>
    </div>
    <hr>
    <div>
      <h3>p.107</h3>
      <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">Class Binding</div>
      <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding</div>
      <div class="container" v-bind:class="clsArr">Class Binding</div>
    </div>
    <hr>
    <div>
      <h3>p.110</h3>
      <div :style="styleObj">인라인 스타일 바인딩</div>
    </div>
  </div>
</template>

  <style>
    .container { width: 100%; height: 200px; }
    .active { background-color: yellow; font-weight: bold; }
    .text-red { color: red; }
  </style>

<script>
export default {
  data() {
    return {
      numberModel: 4,
      gender: '0',
      htmlString: '<p style="color:red">This is a red string</p>',
      message: "내용을 입력 textarea",
      city: '02',
      checked: [],
      textValue1: '',
      textValue2: '',
      isActive: true,
      hasError: true,
      activeClass: 'active',
      errorClass: 'text-red',
      clsArr: ['active', 'text-red'],
      styleObj: {
        color: 'red',
        fontSize: '16px'
      }
    };
  },
  computed: { // 변수값이 변하면 어떻게 출력하겠다!
    printNumber() {
      return this.numberModel + 3;
    },
    printGender() {
      return this.gender === '0' ? 'female' : 'male';
    },
    printText() {
      return this.message;
    },
    printCity() {
      return '지역코드 ' + this.city;
    },
  }
}
</script>