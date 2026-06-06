export const isPuppy = (age) => {
  // BUG 7: Retorna verdadeiro para 1 ano de idade. O requisito é < 1 ano.
  return age <= 1;
};

export const formatCurrency = (amount) => {
  // BUG 8: O programa trava ou retorna "NaN" se o valor for nulo/indefinido
  return "$" + Number(amount).toFixed(2);
};

export const validateForm = (name, species) => {
  // BUG 9: Verifica apenas o comprimento, não verifica strings vazias com espaços " "
  return name.length > 0 && species.length > 0;
};
