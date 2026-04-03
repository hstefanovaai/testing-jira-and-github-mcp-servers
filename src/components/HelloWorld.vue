<template>
  <div class="hello-world">
    <h2>{{ greeting }}</h2>
    <p>{{ description }}</p>
    <input v-model="userInput" type="text" placeholder="Enter your name" />
    <button @click="updateGreeting">Update Greeting</button>
    <p v-if="userInput" class="personalized">{{ personalizedGreeting }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      greeting: 'Hello from HelloWorld Component!',
      description: 'This component uses the Options API with data, methods, and computed properties.',
      userInput: ''
    }
  },
  methods: {
    updateGreeting() {
      if (this.userInput.trim()) {
        this.greeting = `Hello, ${this.userInput}!`
      }
    }
  },
  computed: {
    personalizedGreeting() {
      return `Nice to meet you, ${this.userInput}! Welcome to Vue.js.`
    }
  }
}
</script>

<style scoped>
.hello-world {
  background-color: #f5f5f5;
  border: 2px solid #42b983;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  color: #42b983;
  margin-bottom: 10px;
}

p {
  color: #555;
  line-height: 1.6;
}

input {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background-color: #369970;
}

.personalized {
  color: #42b983;
  font-weight: bold;
  margin-top: 10px;
}
</style>