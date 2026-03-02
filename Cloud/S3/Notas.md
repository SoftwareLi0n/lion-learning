
## Mover varios archivos por consola

Verificar como se movería (no mueve)
```bash
aws s3 mv "s3://softwarelion/softwarelion/PLUZ PERÚ/" "s3://softwarelion/softwarelion/PLUZ PERU/" --recursive --dryrun
```

"Mueve" los archivos
```bash
aws s3 mv "s3://softwarelion/softwarelion/PLUZ PERÚ/" "s3://softwarelion/softwarelion/PLUZ PERU/" --recursive
```