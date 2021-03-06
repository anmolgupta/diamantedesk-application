<?php
/*
 * Copyright (c) 2015 Eltrino LLC (http://eltrino.com)
 *
 * Licensed under the Open Software License (OSL 3.0).
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://opensource.org/licenses/osl-3.0.php
 *
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@eltrino.com so we can send you a copy immediately.
 */

namespace Diamante\DeskBundle\Infrastructure\Notification\OptionProvider;

use Diamante\DeskBundle\Infrastructure\Notification\OptionsProvider;
use Diamante\DeskBundle\Infrastructure\Notification\OptionsProviderInterface;

class CommentUpdated extends OptionsProvider implements OptionsProviderInterface
{
    /**
     * @return string
     */
    public function getHtmlTemplate()
    {
        return '@DiamanteDesk/Automation/Notification/Entity/commentUpdated.html.twig';
    }

    /**
     * @return string
     */
    public function getTxtTemplate()
    {
        return '@DiamanteDesk/Automation/Notification/Entity/commentUpdated.html.twig';
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'comment_updated';
    }

    /**
     * @return string
     */
    public function getSubject()
    {
        return 'diamante.desk.automation.notification.comment.updated';
    }

    /**
     * @param $target
     * @return array
     */
    public function getAdditionalOptions($target)
    {
        return [];
    }
}
