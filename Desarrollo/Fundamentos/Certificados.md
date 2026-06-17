Se usan para validar la identidad de una entidad y mantener la seguridad.

Tiene 2 keys:
1. Public
2. Private


**Types:**
1. **.cer o .crt**: Este archivo contiene **solo tu Public Key** (junto con los datos de tu empresa y quién emitió el certificado).
2. **.p12 o .pfx**: Contiene **TODO el paquete: tu Public Key + tu Private Key** (y a veces la cadena de confianza completa) unidas en un solo archivo o "bóveda".
3. **.key**: Usualmente guarda _solo_ la Private Key.
4. **.pem**: Es un formato de texto. Puede contener cualquier cosa adentro (el `.cer`, la `.key`, o ambos). Si lo abres con el Bloc de notas o VS Code, verás un bloque de texto ilegible que empieza con `-----BEGIN CERTIFICATE-----`.