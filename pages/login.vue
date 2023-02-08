<template>
  <v-sheet width="300" class="mx-auto ma-10">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="logIn"
        label="Login"
        :rules="logInRules"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        :rules="passwordRules"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    logIn: "",
    logInRules: [
      (value) => {
        if (value?.length > 3) return true;

        return "Login must be at least 3 characters.";
      },
    ],
    password: "",
    passwordRules: [
      (value) => {
        if (value?.length > 3) return true;

        return "Password must be at least 3 characters.";
      },
    ],
  }),
};
</script>
