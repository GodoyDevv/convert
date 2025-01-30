// Cotação de moedas do dia.
// Currency quote of the day.
const USD = 5.85
const EUR = 6.12
const GBP = 7.30

// Obtendo os elementos do formulário.
// Getting the form elements.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber apenas números.
// handling the input amount to accept only numbers.
amount.addEventListener("input", () => {  
  const hasCharactersRegex = /\D+/g  
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando o evento de submit (enviar) do fomulário.
// Capturing the form's submit event.
form.onsubmit = (event) => {
  event.preventDefault()
  
  // função para converter moeda.

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
      case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break
      }
}

  function convertCurrency (amount, price, symbol) {
    try {
      // Exibindo a cotação da moeda selecionada.
      // displaying the quote of the selected currency.
      description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)} `

      // Calcula o total.
      // Calculates the total.
      let total = amount * price

      // Verifica se o resultado não é um número.
      // Checks if the resut is not a number.
      if (isNaN(total)) {
        return alert("Por favor, digite o valor corretamente para converter.")
      }

      // Formata o valor total.
      // Formats the total value.
      total = formatCurrencyBRL(total).replace("R$", "")

      // Exibe o resultado total.
      // Displays the total result.
      result.textContent = `${total} Reais` 
      
      // Aplica a classe que exibe o footer.
      // applies the class that displays the footer to show the result.
      footer.classList.add("show-result")
    } catch (error) {
      // Remove a classe do footer removendo ele.
      // Removes the footer class by removing it.
      footer.classList.remove("show-result")

      console.log(error)
      alert("Não foi possível converter. Tente novamente mais tarde.")
    }
  }

  // Formata a moeda em Real Brasileiro.
  // Formats the currency in Brazilian Real.
  function formatCurrencyBRL(value) {
    // Converte em número para utilizar o toLocaleString para formatar no padrão BRL.
    // Converts to number to use toLocaleString to format in BRL standard. (R$ 00,00)
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  }





