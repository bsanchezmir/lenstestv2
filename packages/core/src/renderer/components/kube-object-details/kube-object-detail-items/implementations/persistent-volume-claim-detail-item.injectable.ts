/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { kubeObjectDetailItemInjectionToken } from "../kube-object-detail-item-injection-token";
import { computed } from "mobx";
import { PersistentVolumeClaimDetails } from "../../../storage-volume-claims";
import { kubeObjectMatchesToKindAndApiVersion } from "../kube-object-matches-to-kind-and-api-version";
import currentKubeObjectInDetailsInjectable from "../../current-kube-object-in-details.injectable";

const persistentVolumeClaimDetailItemInjectable = getInjectable({
  id: "persistent-volume-claim-detail-item",

  instantiate: (di) => {
    const kubeObject = di.inject(currentKubeObjectInDetailsInjectable);

    return {
      Component: PersistentVolumeClaimDetails,
      enabled: computed(() => isPersistentVolumeClaim(kubeObject.value.get()?.object)),
      orderNumber: 10,
    };
  },

  injectionToken: kubeObjectDetailItemInjectionToken,
});

export const isPersistentVolumeClaim = kubeObjectMatchesToKindAndApiVersion(
  "PersistentVolumeClaim",
  ["v1"],
);

export default persistentVolumeClaimDetailItemInjectable;
