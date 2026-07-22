# Primitives de mise en page

Ces composants implémentent `CMP-01`, `CMP-02` et `CMP-03` du Design System V1.
Ils restent génériques, sans logique métier et compatibles avec les Server Components.
Leur API n'accepte pas de styles inline afin d'empêcher le contournement local des tokens.

Les espacements exposés par `Stack` et `Grid` utilisent les noms sémantiques définis par la
convention d'API du Design System. Chaque nom correspond à un unique token de `DT-03` et
n'ajoute aucune valeur d'espacement.

## Container

`Container` centre le contenu et exige une largeur explicite : `main`, `reading` ou
`narrow`. Ses marges internes suivent `MEP-03` et les points de rupture `DT-10`.

## Stack

`Stack` exige une orientation et un espacement de `DT-03`. Il organise uniquement ses
enfants et ne porte aucune règle d'alignement ou de priorité fonctionnelle.

## Grid

`Grid` suit les 4, 8 et 12 colonnes de `MEP-02`. Sa gouttière est choisie parmi les trois
valeurs autorisées par `MEP-03`. `GridItem` appartient à son API et permet de déclarer une
extension responsive typée, avec héritage de la valeur plus compacte lorsqu'une valeur
supérieure n'est pas fournie.

`GridItem` utilise en interne des propriétés personnalisées inline strictement typées pour
transmettre les extensions de colonnes au CSS Module. Cette exception ne contient aucune
valeur visuelle, n'est pas accessible par l'API publique et ne permet pas de contourner les
Design Tokens.
