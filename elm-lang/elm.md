elm
===

# ![](images/elm_logo.png) 

GitHub [@siliconrob](https://github.com/Siliconrob)

---

# Goals
* Strong types
* Bye bye runtime exceptions
* Performance
* Versioning
* Interoperability with Javascript

---

# Types and Errors

```
money_i_got_for_this = 0

0 : number
```
There are types and they are inferred by default

```
money_i_got_for_this = "nothing"

"nothing" : String
```


---

# Types Continued

### Match your types
```
String.toInt("67") |> Result.toMaybe |> Maybe.withDefault 0
```

Alternate
```
Result.withDefault 0 (String.toInt "67")
```
---

# Scary Types 

```
type List = Empty | Node Int List

oh_noes : List

```


### But if you don't `elm` has a detailed and clear error system
---

# Let's break things

---

# Recommended Architecture

* Model - the state of your application
* Update - a way to update your state
* View - a way to view your state as HTML

---

# Template 

```
import Html exposing (..)

-- MODEL
type alias Model = { ... }

-- UPDATE

type Msg = Reset | ...

update : Msg -> Model -> Model
update msg model =
  case msg of
    Reset -> ...
    ...

-- VIEW

view : Model -> Html Msg
view model =
  ...
```
---
# Work through Big Dice Demo

[Dice](dice/dice.elm)