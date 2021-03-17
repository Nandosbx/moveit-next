import { Fragment, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    return (
        <Fragment>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <header>{level}</header>
                    <strong>Parabéns</strong>
                    <p>Tu alcançaste um novo nível</p>

                    <button type="button" onClick={closeLevelUpModal}>
                        <img src="/icons/close.svg" alt="Fechar modal" />
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
