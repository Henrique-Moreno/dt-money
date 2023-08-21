import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionsModal } from "../NewTransactionsModal";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionsModal />

        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
