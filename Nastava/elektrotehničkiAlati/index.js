
        document.querySelectorAll('.sidebar .nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.sidebar .nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                const section = this.dataset.section;
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.getElementById(section).classList.add('active');
            });
        });


        document.getElementById('formOhmov').addEventListener('submit', function(e) {
            e.preventDefault();
            const R = parseFloat(document.getElementById('otpor').value);
            const U = parseFloat(document.getElementById('napon').value);
            const I = U / R;
            const rezultat = document.getElementById('rezOhmov');
            rezultat.innerHTML = `Struja (I) = ${I.toFixed(4)} A`;
            rezultat.style.display = 'block';
        });

        document.getElementById('formDjelilo').addEventListener('submit', function(e) {
            e.preventDefault();
            const R1 = parseFloat(document.getElementById('r1').value);
            const R2 = parseFloat(document.getElementById('r2').value);
            const Uul = parseFloat(document.getElementById('uul').value);
            const Uiz = Uul * (R2 / (R1 + R2));
            const rezultat = document.getElementById('rezDjelilo');
            rezultat.innerHTML = `Izlazni Napon (U<sub>iz</sub>) = ${Uiz.toFixed(4)} V`;
            rezultat.style.display = 'block';
        });

        document.getElementById('formSpoj').addEventListener('submit', function(e) {
            e.preventDefault();
            const val1 = parseFloat(document.getElementById('val1').value);
            const val2 = parseFloat(document.getElementById('val2').value);
            const tip = document.querySelector('input[name="tipSpoja"]:checked').value;
            let rezultat;
            let jedinica;
            
            switch(tip) {
                case 'ser-otp':
                    rezultat = val1 + val2;
                    jedinica = 'Ω';
                    break;
                case 'par-otp':
                    rezultat = (val1 * val2) / (val1 + val2);
                    jedinica = 'Ω';
                    break;
                case 'ser-kond':
                    rezultat = (val1 * val2) / (val1 + val2);
                    jedinica = 'F';
                    break;
                case 'par-kond':
                    rezultat = val1 + val2;
                    jedinica = 'F';
                    break;
            }
            
            document.getElementById('rezSpoj').innerHTML = `Ukupna vrijednost = ${rezultat.toFixed(6)} ${jedinica}`;
            document.getElementById('rezSpoj').style.display = 'block';
        });

        document.querySelectorAll('input[name="tipSpoja"]').forEach(radio => {
            radio.addEventListener('change', function() {
                const prviL = document.getElementById('labelSpoj1');
                const drugiL = document.getElementById('labelSpoj2');
                if (this.value.includes('otp')) {
                    prviL.textContent = 'R1 [Ω]:';
                    drugiL.textContent = 'R2 [Ω]:';
                } else {
                    prviL.textContent = 'C1 [F]:';
                    drugiL.textContent = 'C2 [F]:';
                }
            });
        });

   
        document.getElementById('formInduktivitet').addEventListener('submit', function(e) {
            e.preventDefault();
            const N = parseFloat(document.getElementById('namotaji').value);
            const A = parseFloat(document.getElementById('povrsina').value);
            const l = parseFloat(document.getElementById('duljina').value);
            const mu0 = 4 * Math.PI * 1e-7;
            const L = (mu0 * N * N * A) / l;
            document.getElementById('rezInduktivitet').innerHTML = `Induktivitet (L) = ${L.toExponential(4)} H`;
            document.getElementById('rezInduktivitet').style.display = 'block';
        });

 
        document.getElementById('formInduktivniOtpor').addEventListener('submit', function(e) {
            e.preventDefault();
            const f = parseFloat(document.getElementById('frekvencija').value);
            const L = parseFloat(document.getElementById('induktivitet').value);
            const XL = 2 * Math.PI * f * L;
            document.getElementById('rezInduktivniOtpor').innerHTML = `Induktivni Otpor (X<sub>L</sub>) = ${XL.toFixed(4)} Ω`;
            document.getElementById('rezInduktivniOtpor').style.display = 'block';
        });

        document.getElementById('formKapacitivniOtpor').addEventListener('submit', function(e) {
            e.preventDefault();
            const f = parseFloat(document.getElementById('frekvencijaC').value);
            const C = parseFloat(document.getElementById('kapacitivnost').value);
            const XC = 1 / (2 * Math.PI * f * C);
            document.getElementById('rezKapacitivniOtpor').innerHTML = `Kapacitivni Otpor (X<sub>C</sub>) = ${XC.toFixed(4)} Ω`;
            document.getElementById('rezKapacitivniOtpor').style.display = 'block';
        });


