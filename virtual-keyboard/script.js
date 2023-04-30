

let container = document.createElement('div')
container.className = "container"
container.innerHTML = ""
document.body.append(container)

//Title
let title = document.createElement('h1')
title.className = "title"
title.innerHTML = "Virtual Keyboard"
container.append(title)

//Text area
let textArea = document.createElement('textarea')
textArea.className = "text-area"
textArea.id = "text-area"
textArea.rows = 4
textArea.cols = 40
textArea.innerHTML = ""
container.append(textArea)

//Keyboard
let keyboard = document.createElement('div')
keyboard.className = "keyboard"
keyboard.id = "keyboard"
keyboard.innerHTML = ""
container.append(keyboard)

for (let i = 0; i < 5; i++){
  let keyboardLine = document.createElement('div')
  keyboardLine.className = "keyboard__line line"
  keyboardLine.id = `line-${i + 1}`
  keyboardLine.innerHTML = ""
  keyboard.append(keyboardLine)
}

let lineOne = document.getElementById("line-1")
let lineTwo = document.getElementById("line-2")
let lineThree = document.getElementById("line-3")
let lineFour = document.getElementById("line-4")
let lineFive = document.getElementById("line-5")

//Line one
let keyBackquote = document.createElement('div')
keyBackquote.className = "keyboard__key keyBackquote key"
keyBackquote.innerHTML = "`"
lineOne.append(keyBackquote)

let keyOne = document.createElement('div')
keyOne.className = "keyboard__key keyOne key"
keyOne.innerHTML = "1"
lineOne.append(keyOne)

let keyTwo = document.createElement('div')
keyTwo.className = "keyboard__key keyTwo key"
keyTwo.innerHTML = "2"
lineOne.append(keyTwo)

let keyThree = document.createElement('div')
keyThree.className = "keyboard__key keyThree key"
keyThree.innerHTML = "3"
lineOne.append(keyThree)

let keyFour = document.createElement('div')
keyFour.className = "keyboard__key keyFour key"
keyFour.innerHTML = "4"
lineOne.append(keyFour)

let keyFive = document.createElement('div')
keyFive.className = "keyboard__key keyFive key"
keyFive.innerHTML = "5"
lineOne.append(keyFive)

let keySix = document.createElement('div')
keySix.className = "keyboard__key keySix key"
keySix.innerHTML = "6"
lineOne.append(keySix)

let keySeven = document.createElement('div')
keySeven.className = "keyboard__key keySeven key"
keySeven.innerHTML = "7"
lineOne.append(keySeven)

let keyEight = document.createElement('div')
keyEight.className = "keyboard__key keyEight key"
keyEight.innerHTML = "8"
lineOne.append(keyEight)

let keyNine = document.createElement('div')
keyNine.className = "keyboard__key keyNine key"
keyNine.innerHTML = "9"
lineOne.append(keyNine)

let keyZero = document.createElement('div')
keyZero.className = "keyboard__key keyZero key"
keyZero.innerHTML = "0"
lineOne.append(keyZero)

let keyMinus = document.createElement('div')
keyMinus.className = "keyboard__key keyMinus key"
keyMinus.innerHTML = "-"
lineOne.append(keyMinus)

let keyEquals = document.createElement('div')
keyEquals.className = "keyboard__key keyEquals key"
keyEquals.innerHTML = "="
lineOne.append(keyEquals)

let keyBackspace = document.createElement('div')
keyBackspace.className = "keyboard__key keyBackspace key speсialKey"
keyBackspace.innerHTML = "Backspace"
lineOne.append(keyBackspace)

//Line two
let keyTab = document.createElement('div')
keyTab.className = "keyboard__key keyTab key speсialKey"
keyTab.innerHTML = "Tab"
lineTwo.append(keyTab)

let keyQ = document.createElement('div')
keyQ.className = "keyboard__key keyQ key"
keyQ.innerHTML = "q"
lineTwo.append(keyQ)

let keyW = document.createElement('div')
keyW.className = "keyboard__key keyW key"
keyW.innerHTML = "w"
lineTwo.append(keyW)

let keyE = document.createElement('div')
keyE.className = "keyboard__key keyE key"
keyE.innerHTML = "e"
lineTwo.append(keyE)

let keyR = document.createElement('div')
keyR.className = "keyboard__key keyR key"
keyR.innerHTML = "r"
lineTwo.append(keyR)

let keyT = document.createElement('div')
keyT.className = "keyboard__key keyT key"
keyT.innerHTML = "t"
lineTwo.append(keyT)

let keyY = document.createElement('div')
keyY.className = "keyboard__key keyY key"
keyY.innerHTML = "y"
lineTwo.append(keyY)

let keyU = document.createElement('div')
keyU.className = "keyboard__key keyU key"
keyU.innerHTML = "u"
lineTwo.append(keyU)

let keyI = document.createElement('div')
keyI.className = "keyboard__key keyI key"
keyI.innerHTML = "i"
lineTwo.append(keyI)

let keyO = document.createElement('div')
keyO.className = "keyboard__key keyO key"
keyO.innerHTML = "o"
lineTwo.append(keyO)

let keyP = document.createElement('div')
keyP.className = "keyboard__key keyP key"
keyP.innerHTML = "p"
lineTwo.append(keyP)

let keyBracketLeft = document.createElement('div')
keyBracketLeft.className = "keyboard__key keyBracketLeft key"
keyBracketLeft.innerHTML = "["
lineTwo.append(keyBracketLeft)

let keyBracketRight = document.createElement('div')
keyBracketRight.className = "keyboard__key keyBracketRight key"
keyBracketRight.innerHTML = "]"
lineTwo.append(keyBracketRight)

let keyBackSlash = document.createElement('div')
keyBackSlash.className = "keyboard__key keyBackSlash key"
keyBackSlash.innerHTML = "\\"
lineTwo.append(keyBackSlash)

let keyDel = document.createElement('div')
keyDel.className = "keyboard__key keyDel key speсialKey"
keyDel.innerHTML = "Del"
lineTwo.append(keyDel)

//Line three
let keyCaps = document.createElement('div')
keyCaps.className = "keyboard__key keyCaps key speсialKey"
keyCaps.innerHTML = "CapsLock"
lineThree.append(keyCaps)

let keyA = document.createElement('div')
keyA.className = "keyboard__key keyA key"
keyA.innerHTML = "a"
lineThree.append(keyA)

let keyS = document.createElement('div')
keyS.className = "keyboard__key keyS key"
keyS.innerHTML = "s"
lineThree.append(keyS)

let keyD = document.createElement('div')
keyD.className = "keyboard__key keyD key"
keyD.innerHTML = "d"
lineThree.append(keyD)

let keyF = document.createElement('div')
keyF.className = "keyboard__key keyF key"
keyF.innerHTML = "f"
lineThree.append(keyF)

let keyG = document.createElement('div')
keyG.className = "keyboard__key keyG key"
keyG.innerHTML = "g"
lineThree.append(keyG)

let keyH = document.createElement('div')
keyH.className = "keyboard__key keyH key"
keyH.innerHTML = "h"
lineThree.append(keyH)

let keyJ = document.createElement('div')
keyJ.className = "keyboard__key keyJ key"
keyJ.innerHTML = "j"
lineThree.append(keyJ)

let keyK = document.createElement('div')
keyK.className = "keyboard__key keyK key"
keyK.innerHTML = "k"
lineThree.append(keyK)

let keyL = document.createElement('div')
keyL.className = "keyboard__key keyL key"
keyL.innerHTML = "l"
lineThree.append(keyL)

let keySemicolon = document.createElement('div')
keySemicolon.className = "keyboard__key keySemicolon key"
keySemicolon.innerHTML = ";"
lineThree.append(keySemicolon)

let keyQuote = document.createElement('div')
keyQuote.className = "keyboard__key keyQuote key"
keyQuote.innerHTML = "'"
lineThree.append(keyQuote)

let keyEnter = document.createElement('div')
keyEnter.className = "keyboard__key keyEnter key speсialKey"
keyEnter.innerHTML = "Enter"
lineThree.append(keyEnter)

//Line four
let keyShiftLeft = document.createElement('div')
keyShiftLeft.className = "keyboard__key keyShiftLeft key speсialKey"
keyShiftLeft.innerHTML = "Shift"
lineFour.append(keyShiftLeft)

let keyZ = document.createElement('div')
keyZ.className = "keyboard__key keyZ key"
keyZ.innerHTML = "z"
lineFour.append(keyZ)

let keyX = document.createElement('div')
keyX.className = "keyboard__key keyX key"
keyX.innerHTML = "x"
lineFour.append(keyX)

let keyC = document.createElement('div')
keyC.className = "keyboard__key keyC key"
keyC.innerHTML = "c"
lineFour.append(keyC)

let keyV = document.createElement('div')
keyV.className = "keyboard__key keyV key"
keyV.innerHTML = "v"
lineFour.append(keyV)

let keyB = document.createElement('div')
keyB.className = "keyboard__key keyB key"
keyB.innerHTML = "b"
lineFour.append(keyX)

let keyN = document.createElement('div')
keyN.className = "keyboard__key keyN key"
keyN.innerHTML = "n"
lineFour.append(keyN)

let keyM = document.createElement('div')
keyM.className = "keyboard__key keyM key"
keyM.innerHTML = "m"
lineFour.append(keyM)

let keyComma = document.createElement('div')
keyComma.className = "keyboard__key keyComma key"
keyComma.innerHTML = ","
lineFour.append(keyComma)

let keyDot = document.createElement('div')
keyDot.className = "keyboard__key keyDot key"
keyDot.innerHTML = "."
lineFour.append(keyDot)

let keySlash = document.createElement('div')
keySlash.className = "keyboard__key keySlash key"
keySlash.innerHTML = "/"
lineFour.append(keySlash)

let keyArrowUp = document.createElement('div')
keyArrowUp.className = "keyboard__key keyArrowUp key speсialKey"
keyArrowUp.innerHTML = "▲"
lineFour.append(keyArrowUp)

let keyShiftRight = document.createElement('div')
keyShiftRight.className = "keyboard__key keyShiftRight key speсialKey"
keyShiftRight.innerHTML = "Shift"
lineFour.append(keyShiftRight)

//Line Five
let keyCtrlLeft = document.createElement('div')
keyCtrlLeft.className = "keyboard__key keyCtrlLeft key speсialKey"
keyCtrlLeft.innerHTML = "Ctrl"
lineFive.append(keyCtrlLeft)

let keyWin = document.createElement('div')
keyWin.className = "keyboard__key keyWin key speсialKey"
keyWin.innerHTML = "Win"
lineFive.append(keyWin)

let keyAltLeft = document.createElement('div')
keyAltLeft.className = "keyboard__key keyAltLeft key speсialKey"
keyAltLeft.innerHTML = "Alt"
lineFive.append(keyAltLeft)

let keySpace = document.createElement('div')
keySpace.className = "keyboard__key keySpace key speсialKey"
keySpace.innerHTML = "Space"
lineFive.append(keySpace)

let keyAltRight = document.createElement('div')
keyAltRight.className = "keyboard__key keyAltRight key speсialKey"
keyAltRight.innerHTML = "Alt"
lineFive.append(keyAltRight)

let keyArrowLeft = document.createElement('div')
keyArrowLeft.className = "keyboard__key keyArrowLeft key speсialKey"
keyArrowLeft.innerHTML = "◀"
lineFive.append(keyArrowLeft)

let keyArrowDown = document.createElement('div')
keyArrowDown.className = "keyboard__key keyArrowDown key speсialKey"
keyArrowDown.innerHTML = "▼"
lineFive.append(keyArrowDown)

let keyArrowRight = document.createElement('div')
keyArrowRight.className = "keyboard__key keyArrowRight key speсialKey"
keyArrowRight.innerHTML = "▶"
lineFive.append(keyArrowRight)

let keyCtrlRight = document.createElement('div')
keyCtrlRight.className = "keyboard__key keyCtrlRight key speсialKey"
keyCtrlRight.innerHTML = "Ctrl"
lineFive.append(keyCtrlRight)

//Info
let info = document.createElement('p')
info.className = "info"
info.innerHTML = "Keyboard is recommended for use with Windows <br><br> To switch the input language use: left alt + shift"
container.append(info)