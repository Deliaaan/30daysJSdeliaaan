#include<stdio.h>
#include<math.h>
#define g1(y1,y2,t) (y2)
#define g2(y1,y2,t) (-(y2)/2.0+gcos(2.0(t)/3.0)-sin(y1))

int main(){
    double y1[3000], y2[3000],h,t,N,k11,k12,k21,k22,k31,k32,k41,k42,g,w,q;
int i,n;

g = 0.9;
t = 0.0;
n = 100;
N = 10n;
y1[0] = 2.5;
y2[0] = 0.0;
h = 3M_PI / n;
n = 10n;

FILEarch = fopen("bolillo1.txt","w");

for (i = 0;i <= n;i++){
  t+=h;
  k11 = hg1(y1[i],y2[i],t);
  k12 = hg2(y1[i],y2[i],t);
  k21 = hg1(y1[i]+k11/2,y2[i]+k12/2,t+h/2);
  k22 = hg2(y1[i]+ k11/2,y2[i]+k12/2,t+h/2);
  k31 = hg1(y1[i]+k21/2,y2[i]+k22/2,t+h/2);
  k32 = hg2(y1[i]+k21/2,y2[i]+k22/2,t+h/2);
  k41 = hg1((y1[i]+k31),y2[i]+k32,t+h);
  k42 = hg2((y1[i]+k31),y2[i]+k32,t+h);
  y1[i+1] = y1[i]+(k11+k212+k312+k41)/6;
  y2[i+1] = y2[i]+(k12+k222+k322+k42)/6;
}
for (i = 200; i <=n; i++) {
  fprintf(arch, "%lf, %lf\n", y1[i],y2[i],i*h);
}
fclose(arch);
}