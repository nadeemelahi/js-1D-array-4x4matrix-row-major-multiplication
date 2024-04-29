

/*
 * author: Nadeem Elahi
 * nadeem.elahi@gmail.com
 * nad@3deem.com
 * license: gpl v3
 */

//
// Row Major Multiplication
//
// 1D js array representing a 4x4 matrix as so:
//
//  --                --   --                --
// | m0   m1   m2   m3  | | n0   n1   n2   n3  |
// | m4   m5   m6   m7  | | n4   n5   n6   n7  |
// | m8   m9   m10  m11 | | n8   n9   n10  n11 |
// | m12  m13  m14  m15 | | n12  n13  n14  n15 |
//  --                --   --                --
//
// r0  = m0.n0  +  m1.n4  +  m2.n8  +  m3.n12
// r1  = m0.n1  +  m1.n5  +  m2.n9  +  m3.n13
// r2  = m0.n2  +  m1.n6  +  m2.n10 +  m3.n14
// r3  = m0.n3  +  m1.n7  +  m2.n11 +  m3.n15
//
// r4  = m4.n0  +  m5.n4  +  m6.n8  +  m7.n12
// r5  = m4.n1  +  m5.n5  +  m6.n9  +  m7.n13
// r6  = m4.n2  +  m5.n6  +  m6.n10 +  m7.n14
// r7  = m4.n3  +  m5.n7  +  m6.n11 +  m7.n15
//
// r8  = m8.n0  +  m9.n4  +  m10.n8  +  m11.n12
// r9  = m8.n1  +  m9.n5  +  m10.n9  +  m11.n13
// r10 = m8.n2  +  m9.n6  +  m10.n10 +  m11.n14
// r11 = m8.n3  +  m9.n7  +  m10.n11 +  m11.n15
//
// r12 = m12.n0  +  m13.n4  +  m14.n8  +  m15.n12
// r13 = m12.n1  +  m13.n5  +  m14.n9  +  m15.n13
// r14 = m12.n2  +  m13.n6  +  m14.n10 +  m15.n14
// r15 = m12.n3  +  m13.n7  +  m14.n11 +  m15.n15
//
//
//


function print4x4mat ( mat ) {
	var idx , limx = 16;

	for ( idx = 0 ; idx < limx ; idx += 4 ){

		console.log( mat[idx]
			+ " " + mat[idx + 1]
			+ " " + mat[idx + 2]
			+ " " + mat[idx + 3]
		);
	}
}





function rowMajor4x4matrixMultiplication( rmat , mmat , nmat ) {
	var idx , idy , idz , lim = 4 ;
	var rdex , mdex , ndex ;
	for ( idx = 0 ; idx < lim ; idx ++ ) {
		for ( idy = 0 ; idy < lim ; idy ++ ) {
			for ( idz = 0 ; idz < lim ; idz ++ ) {

				rdex = idy + idx * lim;
				mdex = idz + idx * lim;
				ndex = idy + idz * lim;

				//console.log(rdex,mdex,ndex)
				// 0 0 0
				// 0 1 4
				// 0 2 8
				// 0 3 12
				// 1 0 1
				// 1 1 5
				// 1 2 9
				// 1 3 13
				// 2 0 2
				// 2 1 6

				rmat[rdex] += mmat[mdex] * nmat[ndex];


			}
		}
	}
}


var mmat = new Float32Array(16);
var nmat = new Float32Array(16);
var rmat = new Float32Array(16);

var index , lim = 16;
for ( index = 0 ; index < lim ; index ++ ) {

	mmat[index] = index + 1;
	nmat[index] = index;
}



print4x4mat(mmat);
console.log("---");
print4x4mat(nmat);
console.log("---");

rowMajor4x4matrixMultiplication( rmat , mmat , nmat ) ;
print4x4mat(rmat);


/*

for ( idx = 0 ; idx < lim ; idx ++ ) {
	for ( idy = 0 ; idy < lim ; idy ++ ) {
		for ( idz = 0 ; idz < lim ; idz ++ ) {
			// indices for r 
			//console.log(idy + idx * lim )
			// 0,0,0,0, 
			// 1,1,1,1, 
			// ... 15
			
			// indices for m
			// console.log(idz + idx * lim)
			//  0 ,  1 , 2  , 3    X 4
			//  4 ,  5 , 6  , 7    X 4
			//  8 ,  9 , 10 , 11   X 4
			// 12 , 13 , 14 , 15   X4


			// indices for n
			// console.log(idy + idz * lim); 
			// 0 , 4 , 8 , 12
			// 1 , 5 , 9 , 13
			// 2 , 6 , 10, 14
			// 3 , 7 , 11, 15   X4
			// ---------------
			// 0 , 4 , 8 , 12	
			// ...


		}
	}
}
*/



