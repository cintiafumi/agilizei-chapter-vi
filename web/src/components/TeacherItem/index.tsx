import React, { useCallback } from 'react'

import api from '../../services/api'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

export interface Teacher {
  id: number
  name: string
  avatar: string
  subject: string
  bio: string
  whatsapp: string
  cost: number
}

interface TeacherItemProps {
  teacher:Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = useCallback(() => {
    api.post('connections', {
      user_id: teacher.id
    })
  }, [teacher.id])

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem