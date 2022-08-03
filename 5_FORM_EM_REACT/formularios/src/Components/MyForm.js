import "./MyForm.css"

import {useState} from 'react'

const MyForm = ({user}) => {//para usar o controlled input, deve-se usar as props.
  // 3 - gerenciamento de dados dos inputs.
  const [name, setName] = useState(user ? user.name : '') //Esses valores são parte do procedimento do comando "Controlled Inputs"
  const [email, setEmail] = useState(user ? user.email : '')
  const [bio, setBio] = useState(user ? user.bio : '')
  const [language, setLanguage] = useState(user ? user.language : '')

  const handleName = (e) => { //1° forma de manipular valores dos inputs.
    setName(e.target.value) 
  }

  const handleSubmit = (e) => {
    e.preventDefault() //Evita o recarregamento da página.
    console.log("enviando formulário")
    console.log(name, email, bio, language)

    //LIMPANDO FORMULÁRIOS
    setName('') //Essas linhas de código, servem para limpar o formulário após o envio do mesmo.
    setEmail('')
    setBio('')
    setLanguage('')
  }

  return (
    <div>
        {/* 5- ENVIO DE FORM */}
        {/*1- Criação de FORM */}
        <form onSubmit={handleSubmit}> {/* o evento onSubmit para envio de formulários é sempre colocado na tag "FORM" */}
          <div>
            <label htmlFor="name">Nome: </label>
            <input 
            type="text"
            name="name" 
            placeholder="Digite o seu nome" 
            onChange={handleName}
            value={name} //ultima fase para usar o controlled inputs.
            />
          </div>
          {/* 2 - Label envolvendo inputs*/}
          <label>
            <span>Email: </span>                                             {/*2° forma de manipular valores dos inputs (inline)*/}
            <input type="text" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
          </label>
          {/* INPUT DE TEXTAREA */}
          <div>
            <span>Bio: </span>
            <textarea name="bio" placeholder="Conte-nos sobre você..." onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
          </div>
          {/* INPUT SELECT */}
          <div>
            <span>Escolha: </span>
            <select name="language" onChange={(e) => setLanguage(e.target.value)} value={language}>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="React">React</option>
            </select>
          </div>
          <input type="submit" value="enviar" className="button"/>
        </form>
    </div>
  )
}

export default MyForm