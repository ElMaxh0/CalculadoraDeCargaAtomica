
        function calcular() {
            var a = Number(document.getElementById('numQ').value)
            var b = Number(document.getElementById('numb').value)
            var c = Number(document.getElementById('numc').value)
            var res = document.getElementById('res')
			var calc = document.getElementById('calc')
			var end = document.getElementById('end')
			res.innerHTML += "<h1>Equacao :-)</h1>"
            /*
            ========================================================
            */
            var valorb = Number(document.getElementById('numb').value)
            var valorc = Number(document.getElementById('numc').value)
			var valorqgeral = Number(document.getElementById('numQ-geral'))
			var valora = Number(document.getElementById('numQ').value)
	
			
			var valore = valorb +'e'+ valorc
			var decimal01 = Number( valore );
			var calcfn = String((decimal01*(1.6e-19))/valora);
			var coeficiente = 1.6e-19
			res.innerHTML = "<h1> Resultado </h1>"
			res.innerHTML += "i=(n*e)/t<br>"
			res.innerHTML += 'i=('+valorb+'*10<sup>'+valorc+'</sup>)*(1.6*10<sup>-19</sup>)/'+valora+'<br>'
			res.innerHTML += 'i='+calcfn+"<br>"
			res.innerHTML += '<h4>'+calcfn+"Amperes </h4><br>"
			calc.innerHTML = '<br>i=('+valorb+'*10<sup>'+valorc+'</sup>)*(1.6*10<sup>-19</sup>)/'+valora+'<br>'
			calc.innerHTML += 'i=('+decimal01+'*1,6e-19)/'+valora+'<br>'
			calc.innerHTML += 'i='+decimal01*1.6e-19+'/'+valora+'<br>'
			calc.innerHTML += 'i='+calcfn
            end.innerHTML += '<br>==================================<br> Processamento Finalizado!'
			
			end.innerHTML += '<br><button type="submit"  class = "bt-az" onClick="next()">Proximo Calculo </button> '
			res.innerHTML +=( calcfn ).toFixed(1);

        }
		function next(){
    window.location.reload();
} 