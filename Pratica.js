let usuarios=[]
adicionarUsuario()
listarUsuarios()

function adicionarUsuario () {
   let usuario= {
     nome:"joão",
     idade:"17",
     Email:"Joãopédefeijão@gmail.com"
    } 
   if (usuario.nome==undefined||usuario.nome=="") {
     throw new Error("Nome não definido")
    }
   if (usuario.idade<=0) {
     throw new Error("Idade menor que zero")
    }
   if (usuario.Email==undefined||usuario.Email=="") {
     throw new Error("Email não definido")
    }
    usuarios.push(usuario)
}

function listarUsuarios() {
   console.log(usuarios) 
}
