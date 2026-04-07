from flask import Flask, Response
from flask_cors import CORS
import fdb
import json

app = Flask(__name__)
CORS(app)

con = fdb.connect(
    dsn=r'localhost:C:\BANCO\MEUBANCO.FDB',
    user='SYSDBA',
    password='masterkey',
    charset='UTF8'
)

@app.route('/lojas', methods=['GET'])
def get_lojas():
    cursor = con.cursor()
    cursor.execute("SELECT ID, NOME, ENDERECO, IMAGEM FROM LOJA")

    dados = []
    for row in cursor.fetchall():
        dados.append({
            "id": row[0],
            "nome": row[1],
            "endereco": row[2],
            "imagem": row[3]
        })

    return Response(
        json.dumps(dados, ensure_ascii=False),
        content_type='application/json; charset=utf-8'
    )

if __name__ == '__main__':
    app.run(debug=True)