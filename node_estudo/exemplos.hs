soma x y = x + y

v_reverse [] = []
v_reverse (x:xs) = (v_reverse xs) ++ [x]

doubleMe x = x + x

doubleUs x y = doubleMe x + doubleMe y

doubleSmallNumber x = if x > 100
						then x
						else x*2

doubleSmallNumber' x = (if x > 100 then x else x*2) + 1

ggg x
	| x > 2 = x * 9
	| x == 0 = 0
	| otherwise = 9

conanO'Brien = "Este sou eu, Conan O'Brien!"