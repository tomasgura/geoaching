<?php

$before = memory_get_usage();
$bef = new DateTime();

for ($i=0; $i < 4000000; $i++) {
	$t = microtime(true);
	$now = DateTime::createFromFormat('U.u', $t);
	// $a = new DateTime();
	//echo $i;
}

$after = memory_get_usage();
$aft = new DateTime();
$diff = $aft->format('Uu') - $bef->format('Uu');

echo sprintf("%.2f \n", ($after - $before));
echo sprintf("%.6f sec \n", ($diff/1000000));
