// Recupera o tempo corrente em milisegundos
print(java.lang.System.currentTimeMillis());
// Recupera objeto e exibe formata��o de data padr�o brasileiro
print(new java.text.SimpleDateFormat("dd/MM/yyyy").format(new java.util.Date()));
// Recupera objeto e exibe formata��o de n�mero decimal
print(new java.text.DecimalFormat("###.##").format(345.345));

// Imprime valores absolutos do diret�rio JS
var file =  new java.io.File("js_java_exemplo.js"); 
print(file.getAbsolutePath()); 
print(file.absolutePath); 