import React from 'react'
import styles from './RulesDisplay.module.css'

const RulesDisplay = () => {
    return (
        <div>
            <h1 className={styles.rule__heading}>Pravidla Hry</h1>
            <div>
                <p className={styles.rule__subheading}>Základní <span className='marked'>pravidla:</span></p>
                <ul>
                    <li>Hra obsahuje 5 miniher, které musíš všechny dokončit, aby ses dostal z banky.</li>
                    <li>Minihru nelze přeskočit</li>
                    <li>Pokud minihru pokazíš, máš dvě možnosti:</li>
                    <ol>
                        <li>O   pakovat minihru a <span className='marked'> $10 000 </span> se ti odečte,</li>
                        <li>Začít celou hru od začátku.</li>
                    </ol>
                    <li>Poslední minihra je speciální – zde zadáváš PIN, který si musíš zapamatovat, protože jen jeho správné zadání umožní otevření hlavních dveří.</li>
                </ul>
            </div>

            <div>
                <p className={styles.rule__subheading}><span className='marked'>Konec</span> minihry:</p>
                <ul>
                    <li>Vyhodnotí se čas a množství nasbíraných peněz.</li>
                    <li>Zobrazí se celkové skóre po každé minihře</li>
                    <li>Neúspěšné minihry lze opakovat podle pravidel výše.</li>
                </ul>
            </div>

            <div>
                <p className={styles.rule__subheading}>Konec hry a <span className='marked'>výhra:</span></p>
                <ul>
                    <li>Hra končí, když unikneš z banky s nasbíranými penězi a úspěšně zadáš PIN. </li>
                    <li>Konečná výhra je součet peněz nasbíraných ve všech minihrách.</li>
                    <li>Úspěšné dokončení všech pěti miniher je povinné pro odemčení hlavních dveří a ukončení mise.</li>
                </ul>
            </div>

        </div>
    )
}

export default RulesDisplay