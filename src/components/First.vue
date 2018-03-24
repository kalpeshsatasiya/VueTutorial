<template>
  <div>
    <div>
    <p><b>Texbox</b></p>
    <input v-model="message" placeholder="edit me">
          <span>Message is: {{ message }}</span>
    </div>
      
      <div>
        <p><b>Texbox Area</b></p>
    <textarea v-model="messageMultiLine" placeholder="add multiple lines"></textarea>
    <span>Multiline message is: {{ messageMultiLine }}</span>
    
        </div>

 <div>
          <p><b>Checkbox</b></p>
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>

        </div>


<div id='example-3'>
      <p><b>Multiple Checkbox</b></p>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  
  <span>Checked names: {{ checkedNames }}</span>
</div>

<div>
   <p><b>Select</b></p>
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>

</div>

<div>
<p><b>Radio Button</b></p>
  <input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>
</div>


  </div> 
  
</template>

<script>
export default {
  name: "First",
  data() {
    return {
      message: "",
      messageMultiLine : "",
      checked :   false,
      checkedNames : [] ,
      selected : "B",
      picked:""
    };
  }
};
</script>


