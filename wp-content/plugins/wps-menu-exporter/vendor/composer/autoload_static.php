<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf42a4ca537e7db9fc1bab8bb47dbd9af
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInitf42a4ca537e7db9fc1bab8bb47dbd9af::$classMap;

        }, null, ClassLoader::class);
    }
}