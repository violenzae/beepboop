# _beepboop_

#### _Counting program that replaces numbers with strings 1/24/20_

#### By _**Rachel Schieferstein**_

## Description

_This is an HTML page that contains a jQuery powered form that returns a complete count up to or from the input number during which some numbers in the resulting array are replaced by strings due to conditions. It's based on branching functions and statements as well as for and for each loops. It is designed with Bootstrap CSS._

## Setup/Installation Requirements

* _Clone or download from Github Repository._
* _Open in preferred internet browser._

## Specifications
| Behavior      | Input         | Output|
| ------------- |:-------------:| -----:|
| Can count up to input number    | 5             | 0,1, 2, 3, 4, 5 |
| Replaces numbers that contain certain 1 with a string   | 10      |   Beep! |
| Replaces numbers that contain 2 with a string, overriding the previous rule   | 21      |   Boop! |
| Replaces numbers that contain 3 with a string, overriding the previous rule   | 32      |   "I'm sorry, Dave. I'm afraid I can't do that." |
| Counts up or down when selected from | "count DOWN", 4      |4,3,2,1,0 |
| Numbers divisible by 3 get replaced by a string with the user's entered name, overriding previous rule sets| 'Rachel', 3  |0,1,2,"I'm sorry, Rachel. I'm afraid I can't do that."|
| When the name Homer is entered, all even numbers not falling under other rules and 0 are replaced, and the picture is replaced | 'Homer', 4  |d'oh, 1, d'oh, 3, d'oh & Homer picture  |

## Known Bugs

Currently breaks with non-integers or negative numbers entered in the number input.

## Support and contact details

_If there are any questions, please contact me at violenza@gmail.com._

## Technologies Used

_This page was created using HTML, jQuery, CSS and Bootstrap CSS._

### License

*This software is licensed under the MIT license.*

Copyright (c) 2020 **_Rachel Schieferstein_**