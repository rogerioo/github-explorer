import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/42387946?s=460&u=e96bfdeff7e1fdfa8985698791bd37dd5ef82af6&v=4"
          alt="Rogério Júnior"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Esta é uma descrição top</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/42387946?s=460&u=e96bfdeff7e1fdfa8985698791bd37dd5ef82af6&v=4"
          alt="Rogério Júnior"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Esta é uma descrição top</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/42387946?s=460&u=e96bfdeff7e1fdfa8985698791bd37dd5ef82af6&v=4"
          alt="Rogério Júnior"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Esta é uma descrição top</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
