# Primitives typographiques

`Text` et `Heading` implémentent `CMP-04` et utilisent exclusivement les tokens de `DT-02`.
Les deux composants exigent un élément HTML et une variante visuelle explicites.

`Text` accepte uniquement `p`, `span`, `small`, `strong` et `em`. `Heading` accepte
uniquement `h1` à `h6` et ne déduit jamais ce niveau HTML de sa variante visuelle.

Les graisses appartiennent aux variantes et ne sont pas configurables par une prop publique.
Les largeurs de lecture restent sous la responsabilité exclusive de `Container`.
La prop publique `style` est interdite.
